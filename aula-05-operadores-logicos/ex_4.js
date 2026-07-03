// Instrução para poder rodar
// npm install prompt-sync

// Importar módulo
const prompt = require('prompt-sync')();

// Coletar dados e criar variáveis
let idade = parseFloat(prompt("Digire a sua idade: "))
let sabeJavaScript = prompt("Tem conhecimento de JavaScript? (s/n): ") === "s"
let sabePython = prompt("Tem conhecimento de Python? (s/n): ") === "s"

// Lógica para decidir se será aprovado ou não
if(idade >=18 && (sabeJavaScript || sabePython)) {
    console.log("Currículo aprovado! :)")
} else {
    console.log("Currículo negado! :(")
}