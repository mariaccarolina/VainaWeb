// var, let e 

let nome1 = "Janderson"
console.log(nome1)
// tipos de dados:  "textos, oi"
// string são dados textuais

//variavel + nomeDaVariavel + = + valor
const menorDeIdade = false;
//boleano  false ou true
console.log(menorDeIdade)

// null - nulo
const tipo = null;
console.log(tipo)

//undefined - indefinido
// não foi definido um valor para a variavel
let saldoBancario;
console.log(saldoBancario)

// operadores aritmeticos 
// + - * / %

// Number - numero
let nota1 = 8;
let nota2 = 6;
console.log(nota1 + nota2)

//TempleteString `${}`
let novelaDoMomento = "Pé de chinesa";
let novelaQueMaisGosto = "Teresa";
console.log(`As novelas que estou assistindo são ${novelaDoMomento} e ${novelaQueMaisGosto}`)

//condicionais - tomada de decisão
// if - se
// else - senão

// if(a garrafa tiver agua) {
// pode tomar a agua!
//}else {
// levanta e vai a cozinha tomar agua
//}

let dia = false;

if(dia){
    console.log("Apague as luzes pois já é dia!")
}else{
    console.log("é hora de dormir!")
}

//Operadores de comparação
/* 
= atribuição
< menor
> maior
>= maior igual
<= menor igual
!= diferente
== igual
=== estritamente igual
*/
let notaDesafio = 6;
notaDesafio = 10;
notaDesafio = 2;

//console.log(notaDesafio)

if(notaDesafio >= 6) {
    console.log("Aprovado")
}else{
    console.log("Reprovado")
}


