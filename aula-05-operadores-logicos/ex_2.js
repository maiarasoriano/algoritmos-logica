// Instrução para poder rodar
// npm install prompt-sync

// Importar módulo
const prompt = require('prompt-sync')();

// Coletar dados e criar variáveis
let idade = parseFloat(prompt("Digite a sua idade: "))

// Lógica para decidir se pode pegar entrada gratuita
if(idade <5 || idade >=65) {
    console.log("Passagem gratuita!")
} else {
    console.log("Pague a entrada!")
}