// Não esquecer de instalar (Para poder simular):
// npm install prompt-sync

const prompt = require('prompt-sync')();

// Desenvolver a codificação do 2º desafio à partir deste ponto
// Variáveis
const nomes = [];
const notas1 = [];
const notas2 = [];
const frequencias = [];

const LIMITE_ALUNOS = 3;

// Calcula a média de duas notas
function calculaMedia(nota1, nota2) {
    return (nota1 + nota2) / 2;
}

// Verifica a situação com base na média e frequência
function verificaSituacao(media, frequencia) {
    if (media >= 7.0 && frequencia >= 75) {
        return "Aprovado";
    } else if (media >= 4.0 && frequencia >= 75) {
        return "Recuperação";
    } else {
        return "Reprovado";
    }
}

// Exibe a tabela do boletim individual de cada aluno
function exibeBoletim(nome, n1, n2, media, freq, situacao) {
    console.log(`Aluno: ${nome.padEnd(15)} | Nota 1: ${n1.toFixed(1)} | Nota 2: ${n2.toFixed(1)} | Média: ${media.toFixed(1)} | Frequência: ${freq}% | Situação: ${situacao}`);
}

// Exibe o balanço final da turma
function exibeResumo(aprovados, recuperacao, reprovados) {
    console.log("\n================ RESUMO DA TURMA ================");
    console.log(`Total de Alunos Aprovados:   ${aprovados}`);
    console.log(`Total de Alunos Recuperação: ${recuperacao}`);
    console.log(`Total de Alunos Reprovados:  ${reprovados}`);
    console.log("=================================================");
}

// PROGRAMA PRINCIPAL (Laços e Contadores)
// Loop de Cadastro (Etapa 1)
console.log("============ INICIANDO CADASTRO DE ALUNOS ============");
for (let i = 0; i < LIMITE_ALUNOS; i++) {
    let nome = prompt(`Digite o nome do ${i + 1}º aluno: `);
    let n1 = parseFloat(prompt(`Digite a primeira nota de ${nome}: `));
    let n2 = parseFloat(prompt(`Digite a segunda nota de ${nome}: `));
    let freq = parseFloat(prompt(`Digite a frequência (%) de ${nome}: `));
    console.log("======================================================");

    // Guardando as informações
    nomes.push(nome);
    notas1.push(n1);
    notas2.push(n2);
    frequencias.push(freq);
}

// Variáveis contadoras para o resumo
let totalAprovados = 0;
let totalRecuperacao = 0;
let totalReprovados = 0;

console.log("\n== BOLETIM ESCOLAR ==");

// Loop de Processamento e Exibição
for (let i = 0; i < LIMITE_ALUNOS; i++) {
    // Busca dados nos vetores
    let nome = nomes[i];
    let n1 = notas1[i];
    let n2 = notas2[i];
    let freq = frequencias[i];

    // Execução das funções de cálculo
    let media = calculaMedia(n1, n2);
    let situacao = verificaSituacao(media, freq);

    // Contadores acumulados baseados na situação retornada
    if (situacao === "Aprovado") {
        totalAprovados++;
    } else if (situacao === "Recuperação") {
        totalRecuperacao++;
    } else {
        totalReprovados++;
    }

    // Executa o procedimento de exibição individual
    exibeBoletim(nome, n1, n2, media, freq, situacao);
}

// Executa o procedimento de resumo final
exibeResumo(totalAprovados, totalRecuperacao, totalReprovados);
