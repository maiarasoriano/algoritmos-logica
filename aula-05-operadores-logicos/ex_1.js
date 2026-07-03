// Instrução para poder rodar
// npm install prompt-sync

// Importar módulo
const prompt = require('prompt-sync')();

// Coletar dados e criar variáveis
let nota = parseFloat(prompt("Escreva sua nota: "))
let frequencia = parseFloat(prompt("Escreva a sua frequencia: "))

// Lógica para decidir se o aluno será aprovado ou não
if(nota >=7 && frequencia >=75) {
    console.log("Parabéns! Aprovado! :)")
} else {
    console.log("Puts... Reprovado! :(")
}