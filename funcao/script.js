/*
funções - blocos de codigos que agrupam uma uma determinada instrução 
*/
/*
function nomeDaFunçao() {
    código que vai ser executado;
}
para ativa-la precisamos chama-la:
nomeDaFunçao();
*/
function aviso() {
    console.log("Opa! Sextouuuu!");
}
//invocando, chamando, ativando:
aviso();

// let frutat3 = "tomate";//variavel
// const karyNight = {}; //objeto
// const cantorPrincipal = []; //array

//função anônima
//
const pessoaSorteada = function(nome, cidade) {
    // console.log(nome);
    // console.log(cidade);
    console.log(cidade, nome);
} 

pessoaSorteada("Cauã", "Belford Roxo");
pessoaSorteada("Felix", "Japeri");


let aluno = "Maiala";
aluno = "Maria Luisa"

//                paramentro
function mostrarNome(aluna) {
    console.log(`A aluna sorteada para fazer uma apresentação no Kary Nigth foi a ${aluna}`);
}

mostrarNome("Juliana");
mostrarNome("Victoria");
mostrarNome(aluno);
