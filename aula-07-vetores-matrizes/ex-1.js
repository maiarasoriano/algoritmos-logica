// Importação da biblioteca para rodar
const prompt = require('prompt-sync')()

console.log('--- Vetores com loop ---')
console.log('Digite o nome de 5 produtos abaixo: ')
console.log('')

// Criando o Vetor para guardar os valores
const produtos = []

// Estrutura de repetição para coletar o nome dos 5 filmes
for (let i = 0; i < 5; i++) {
    produtos[i] = prompt('Digite o nome do ${i + 1}° produto: ')
}

// Exibindo o nome dos produtos coletados
console.log('_____________________________')
console.log('')

// Laço para exibir os nomes coletados
for (let i = 0; i <5; i++) {
    console.log('Nome do ${i + 1}° produto digitado: ${produtos[i]}')
}