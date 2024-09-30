/* DOM - DOCUMENT OBJETC MODEL

Podemos fazer:
ler elementos
excluir elementos
modificar elementos
modificar estilos
desvantagem do DOM -> 
VERBOSO, vamos usar muitas palavras para criar algo.
*/

//manupulando os elementos:
// pegar elemento pelo ID
const titulo = document.getElementById("titulo");
// console.log(titulo);

//selecionar elementos pela class:
// html colection []
const titulo2 = document.getElementsByClassName("subtitulo");
console.log(titulo2[0]);

//selecionando elementos atraves da tag

const KaryNight = document.getElementsByTagName("p");
console.log(KaryNight);

//querySelector -> capturar elementos pela tag
const alterandoCor = document.querySelector("h3");
alterandoCor.style.color = "pink";
console.log(alterandoCor)

//querySelector -> capturar elementos pelo id
// id -> document.querySelector("#nomeDoId");
// mudando o texto do elemento
const adcTexto = document.querySelector("#revise");
adcTexto.innerHTML = "Novo texto"

// class -> document.querySelector(".nomeDaClass");
//adc uma borda na imagem
const imagem = document.querySelector(".imagem");
imagem.style.border = "solid red 10px"

//Seleciona todos os elementos que correspondem ao seletor.
//const teste = document.querySelectorAll


