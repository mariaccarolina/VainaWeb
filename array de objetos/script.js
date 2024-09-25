let nome = "Rossana";

// array []
let filmes = ["sobrenatural", "O Jogo da Imitaçaõ", "Shazan"];
// Objeto {} -  Coleção de propriedades
let desafioSamuel = {
  // propriedade: valor,
  nome: "Samuel Oliveira",
  idade: 29,
  situacao: true,
};

// array de objetos
let cadastros = [
  // 0
  {
    nome: "Caroline",
    viagem: "Tailândia",
    idade: 18,
    passagem: true,
  },
  // 1
  {
    nome: "Paulo",
    viagem: "Acapuco",
    idade: 25,
    passagem: false,
  },
  // 2
  {
    nome: "Rossana",
    viagem: "Quebec - Canadá",
    idade: 30,
    passagem: true,
  },
];

//listando todos os objetos:
console.log(cadastros);
// (3) [{…}, {…}, {…}]

//listando apenas uma posição do array de objetos:
console.log(cadastros[0]);
// nome: "Caroline",
// viagem: "Tailândia",
// idade: 18,
// passagem: true

//listando apenas 1 propriedade:
console.log(cadastros[1].viagem);
// Acapuco

// funções:
//Bloco de codigo que agrupa uma sequencia de instruções para executar uma tarefa
// podendo ser reutilizavel

// estrutura de uma função
/*
function nomeDaFuncao(){
    codigo a ser executado;
}

nomeDaFuncao();

*/
