// Instrução para poder rodar
// npm install prompt-sync

// Importar módulo
const prompt = require('prompt-sync')();

// Coletar dados e criar variáveis
let salario = parseFloat(prompt("Qual é o seu salário? R$ "))
let temFiador = prompt("Você possui fiador? (s/n): ") === "s"
let nomeSujo = prompt ("Seu nome está sujo no Serasa? (s/n): ") === "n"

// Lógica para decidir se pode pegar empréstimo ou não
if(nomeSujo && (salario >2000 || temFiador)) {
    console.log("Empréstimo Aprovado! :)")
} else {
    console.log("Empréstimo Negado! :(")
}