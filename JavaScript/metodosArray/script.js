let feiraMercado = [
    "Coca-cola",
    "macarrão",
    "carne moida",
    "batata palha",
    "miojo"
];

// Acessando um array
//para ver todo array:
console.log(feiraMercado);

//para ver cada item do array usaremos o []
console.log(feiraMercado[0]);

// Como saber quantos itens tem dentro do array:
// usando o length
// length => comprimento
console.log(feiraMercado.length);// retorna a quantidade de itens no array

//Usamos métodos para  manipular e acessar dados de maneira eficiente.

let nomeAlunos = [
    "NÃO SEI",
    "vê ai",
    "ah tá"
];

//push() 
//Adiciona um ou mais elementos ao final do array.
//nomeAlunos.push("Ana");
//nomeAlunos.push("Giulya", "josé");
console.log(nomeAlunos)

//unshift()
// Adiciona um ou mais elementos no início do array.
//nomeAlunos.unshift("florentina");

// shift()
//vai tirar uma informação do começo do nosso array
//nomeAlunos.shift();
// retiramos florentina

//pop()
//Remove o último elemento do array.
//nomeAlunos.pop();

// //let nomeAlunos = [
//     "NÃO SEI",
//     "vê ai",
//     "ah tá"
// ];

//splice()
//Adiciona, remove ou substitui elementos no array.

//splice(indice, item deletatado/0, elemento a ser adc)

nomeAlunos.splice(1, 1, "batata");

//Exemplo de Remoção
let frutas = ["maçã", "banana", "laranja"];
frutas.splice(1, 1); // Remove "banana"
console.log(frutas); // ["maçã", "laranja"]

//Exemplo de Adição
//let frutas = ["maçã", "banana"];
frutas.splice(1, 0, "laranja");
console.log(frutas); // ["maçã", "laranja", "banana"]

//Exemplo de Subistituição
//let frutas = ['maçã', 'banana', 'laranja'];
frutas.splice(1, 1, 'morango'); // Remove 'banana' e adiciona 'morango'
console.log(frutas); // ['maçã', 'morango', 'laranja']
