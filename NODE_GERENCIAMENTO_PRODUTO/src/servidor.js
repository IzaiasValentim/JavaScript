function servidor() {
    //Import dos módulos que serão utilizados:

    const express = require('express');
    const app = express();

    const BD = require('./database'); //Endereço relativo.

    const porta = 3003;

    const bodyParser = require('body-parser');

    app.use(bodyParser.urlencoded({ extended: true}));

    /*
        Também foi aplicado/praticado a metodologia Middlewares nas funções com o express.

    */

    /*
        Para auxiliar o teste das funcionalidades, realizei o cadastro prévio de alguns produtos.
    */

    const estoque = [
        {
            nome: 'caneta',
            qntd: 10,
            preco: 5.00
        },
        {
            nome: 'caderno',
            qntd: 30,
            preco: 23.00
        }
    ];

    estoque.forEach(p =>{
        BD.adicionarProduto(p);
        //Irá cadastrar cada componente do estoque teste.
    });

    //As funções next ainda não estão em uso. Adicionadas apenas pela metodologia.

    //Visuzalização geral dos produtos.
        app.get('/produtos',(req,res,next) => {
            res.send(BD.listarProdutos());
        });

    //Seletiva por id.
        app.get('/produtos/:id',(req,res,next)=>{
            res.send(BD.pesquisarProduto(req.params.id));
        });

    //Deleta um produto baseado no id informado.
        app.delete('/produtos/:id',(req,res,next)=>{
            res.send(BD.excluirProduto(req.params.id));
        });

    //Cadastra um produto.
        app.post('/produtos',(req,res,next) =>{

            const produtoAdd = {
                nome:req.body.nome,
                quantidade:req.body.quantidade,
                preco: req.body.preco
            };
            BD.adicionarProduto(produtoAdd);
            res.send(`Produto adicionado - ${Object.values(produtoAdd)}`);
        });

    //Atualiza ou altera um produto baseado no id informado.
        app.put('/produtos/:id',(req,res,next) => {
            const produtoAlterado = {
                nome: req.body.nome,
                quantidade: req.body.quantidade,
                preco: req.body.preco,
                id: req.params.id
            }
            BD.adicionarProduto(produtoAlterado);
            res.send("Produto alterado com sucesso!");
        });

    //Execução da aplicação.
        app.listen(porta,()=>{
            console.log(`--> Servidor OK - Porta -${porta}`);
        });
}

module.exports = {servidor};