// Instrução para poder rodar
// npm install prompt-sync

// Importar módulo
const prompt = require('prompt-sync')();

// Coletar dados e criar variáveis
let produto = prompt("O produto está esgotado? (s/n): ") === "n"

// Lógica para decidir se terá de abastecer
if(produto) {
    console.log("Produto disponível para venda")
} else {
    console.log("Por favor, reabasteça o estoque!")
}