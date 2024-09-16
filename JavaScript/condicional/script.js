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

// =====================================

// || (or) ou
// verifica se uma expressao OU a outra é verdadeira!

let eleitor = 62;

if (eleitor <= 16 || eleitor >= 60) {
  console.log("Seu voto é opcional!");
} else {
  console.log("Você deve votar");
}

//Operadores lógicos:

// && (and) e
// Retorna verdadeiro se os dois valores forem verdadeiros "um && outro"

// login
let userName = "@carolina";
let password = 123456;

if (userName === "@carolina" && password === 123456) {
  console.log("Login efetuado com sucesso");
} else {
  console.log("Senha incorreta! Tente novamente!");
}

let saldo = 9;

if (saldo >= 200) {
  console.log("Irei ao Shopping Rio Mar passear com alguem!");
} else if (saldo >= 100) {
  console.log("Eu irei sozinho pois estou com pouco saldo bancário!");
} else if (saldo <= 10) {
  console.log("Vou ter que ficar em casa!");
}
