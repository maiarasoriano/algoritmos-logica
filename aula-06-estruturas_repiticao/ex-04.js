// Importa o módulo (Para rodar algoritmo no terminal)
const prompt = require('prompt-sync')()

// Título
console.log('--- Validação de Senha ---')
console.log("")

// Exigir a senha

let senha;

do {
    senha = prompt("Digite a senha de usuário: ");
} while (senha !== "1234");

console.log("Senha correta. Acesso permitido!")