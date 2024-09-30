//DOM - PESQUISE POR ARVORE DOM
  /*
  document.getElementById('id'): Seleciona um elemento pelo ID.
document.getElementsByClassName('class'): Seleciona elementos por classe.
document.getElementsByTagName('tag'): Seleciona todos os elementos de uma tag.
document.querySelector('selector'): Seleciona o primeiro elemento que corresponde ao seletor CSS.
document.querySelectorAll('selector'): Seleciona todos os elementos que correspondem ao seletor.
  
  */  

//selecionado o h1:
const titulo = document.getElementById("titulo");
//exibindo oq a variavel titulo esta pegando:
console.log(titulo);

//selecionado o button:
const botao = document.getElementById("meuBotao");
console.log(botao);

//mudando a cor do botão quando ele é clicado:
//chamamos o botao e inserimos um metodo chamado addEventListener, esse metodo adiciona um ouvinte de eventos, que fica esperando o "evento" quando isso acontece ele executa a funçao que foi registrada.
botao.addEventListener("click", function() {
    titulo.innerHTML = "Você clicou!!";
    titulo.style.color = "pink";
});
//elemento.addEventListener(tipoDoEvento, funçãoCallback);
//funçãoCallback é a função que será executada quando o evento ocorrer.

//click" é o tipo de evento que você está "ouvindo
