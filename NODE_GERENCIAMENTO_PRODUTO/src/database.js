/*-->

Aqui é imprementado a simulação de um banco de dados. Terá a criação do 
objeto produto, auto-incremento do produto, leitura, atualização e exclusão.

<--*/

//--> Definição do objeto produto. A adição de seus atributos será realizada em uma
//factory-function.
const produtos = [];

const indice = {
    _id:1,                  //Onde é realizado o incremento do índice do BD.
    get id(){
        return this._id++;
    }
}

function adicionarProduto(produto){
    if(!produto.id){               //Caso o produto ainda não esteja cadastrado, será  
        produto.id = indice.id;    // feito um novo id.
    }

    produtos[produto.id] = produto;
    return produto;
}

function pesquisarProduto(id){
    return produtos[id] || {};
}

function excluirProduto(id){
    const produto = produtos[id];
    delete produtos[id];
    return produto;         //Retorno apenas para vizualização do produto deletado.
}

function listarProdutos(){
    return Object.values(produtos);
}

module.exports={adicionarProduto,pesquisarProduto,excluirProduto,listarProdutos};