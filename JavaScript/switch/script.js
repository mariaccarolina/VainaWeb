// SWITCH
// A condicional switch avalia uma expressão
// combinando um valor de uma expressão com uma case;
//Ele é útil quando você tem muitas condições para verificar e deseja evitar usar múltiplos if...else. 
//o switch não faz comparação, entao não usaremos os operadores de comparação que usamos no if else.

let lancheSaudavel = "Banana";

switch(lancheSaudavel){
    case "laranja":
        console.log("Vamos fazer um suco de laranja!!!");
        break;
    case "limão":
        console.log("Vamos fazer uma limonada!");
        break;
    case "banana":
    case "Banana":
        console.log("Vamos fazer uma vitamina de banana!");
        break;
    default:
        console.log("Desculpe não posso te ajudar!")           
}

//O break impede que o código continue executando os outros casos.

//Se nenhum dos cases for correspondido, o default será executado.
/*
switch (expressao) {
  case valor1:
    // Código a ser executado se expressao === valor1
    break;
  case valor2:
    // Código a ser executado se expressao === valor2
    break;
  // você pode adicionar quantos "case" precisar
  default:
    // Código a ser executado se nenhum valor corresponder
    break;
}
*/

const dia = 3;

switch (dia) {
  case 1:
    console.log("Hoje é segunda-feira");
    break;
  case 2:
    console.log("Hoje é terça-feira");
    break;
  case 3:
    console.log("Hoje é quarta-feira");
    break;
  case 4:
    console.log("Hoje é quinta-feira");
    break;
  case 5:
    console.log("Hoje é sexta-feira");
    break;
  case 6:
    console.log("Hoje é sábado");
    break;
  case 7:
    console.log("Hoje é domingo");
    break;
  default:
    console.log("Dia inválido");
    break;
}

