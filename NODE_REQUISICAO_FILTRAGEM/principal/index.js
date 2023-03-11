//Localização do arquivo no servidor da empresa do meu curso.
const urlFuncionarios = 'http://files.cod3r.com.br/curso-js/funcionarios.json'

//Importação da biblioteca axios que atua como um client HTTP realizando requisições e obtenção de informações remotas.
const axios = require('axios');

//Requisição do arquivo que é armazenado no atributo resposta.
axios.get(urlFuncionarios).then(resposta =>{
    
    //Lista de funcionários é salva em funcionarios.
    const funcionarios = resposta.data;

    /*
        *Nesta seção é realizado o tratamento dos dados.
        *São criadas três funções que irão auxiliar a filtragrem com os métodos filter() e reduce().

        *Funções:

            -chineses: retorna todos os funcionários que são da china.
            -mulheres: retorna todos os funcionários que são do gênero feminino.
            -menorSalario: retorna o menor salário entre os dois Arrays de entrada.
        
        *A resposta da funcionária com menor salário é gerada com a filtragem dos dados de todos os funcionários requisitado do servidor remoto.
     */ 
        const chineses =  c =>{return c.pais == 'China'};
    
        const mulheres = m =>{return m.genero == "F"};
    
        const menorSalario = (acumulado,atual) =>{

            return acumulado.salario < atual.salario ? acumulado:atual ;
        }
        
    const resultado = funcionarios.filter(chineses).filter(mulheres).reduce(menorSalario);

    //O resultado da filtragem é o Array contendo todas as informações da pessoa com o menor salário.
    console.log('Funcionária com menor salário: \n',resultado);

});
