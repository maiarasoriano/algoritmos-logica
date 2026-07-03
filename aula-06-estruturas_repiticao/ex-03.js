// Importa o módulo (Para rodar algoritmo no terminal)
const prompt = require('prompt-sync')()

// Título
console.log('--- Soma até valor digitado ---')
console.log("")

// Pergunta (Escrever um número)
let numero = Number(prompt('Digite um número para gerar a soma: '))
console.log("")

// Laço para gerar a soma
for (let i = 1; i <= 10; i++){
    console.log(numero + " + " + i + " = "+ (numero + i))
}