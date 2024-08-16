"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const functions_1 = require("./functions");
// 1. Crie uma função que receba 2 números e retorne um objeto
// contendo a média e também um indicador booleano de
// aprovado/reprovado. Considere aprovado com média >= 6.
console.log("Ex.1:-------------------------------------------------------------------------------------------------------------------------");
const nota1 = 10;
const nota2 = 5;
console.log(`Nota 1: ${nota1}, Nota 2: ${nota2}`, (0, functions_1.calcularMediaSimples)(nota1, nota2));
// 2. Crie uma função que receba uma lista de objetos contendo nota e
// peso, realize a média das notas considerando o peso. Exemplos:
// Lista com 2 notas: (N1*P1) + (N2*P2) / 2 = Resultado
// Lista com 3 notas: (N1*P1) + (N2*P2) + (N3*P3) / 3 = Resultado
console.log("Ex.2-------------------------------------------------------------------------------------------------------------------------");
const notas1 = [
    { nota: 10, peso: 3 },
    { nota: 5, peso: 2 },
];
const notas2 = [
    { nota: 6, peso: 3 },
    { nota: 8, peso: 2 },
    { nota: 10, peso: 5 },
];
console.log("Exemplo 1.", { notas1 }, "Média Ponderada:", (0, functions_1.calcularMediaPonderada)(notas1));
console.log("Exemplo 2.", { notas2 }, "Média Ponderada:", (0, functions_1.calcularMediaPonderada)(notas2));
// 3. Crie um programa que simule uma carteira de dinheiro. Este
// programa vai precisar ter uma carteira contendo saldo, transações
// de entrada e saídas. Ou seja, será um objeto com estas
// propriedades. Depois crie uma função para lançar uma entrada e
// uma saída. Caso ao lançar uma saída e não tiver saldo, precisa dar
// um erro ou avisar.
console.log("Ex.3-------------------------------------------------------------------------------------------------------------------------");
const saldoCarteira = [
    {
        saldo: 0,
        entrada: 1500,
        saida: 1000,
    },
];
(0, functions_1.calcularSaldo)(saldoCarteira);
// 4. Crie um programa para cadastrar, listar e excluir produtos de uma
// lista com tipagem de Produto.
console.log("Ex.4-------------------------------------------------------------------------------------------------------------------------");
(0, functions_1.cadastrarProduto)("Chapéu", 50.0);
(0, functions_1.cadastrarProduto)("Vestido de festa", 500.0);
(0, functions_1.cadastrarProduto)("Sapato", 200.0);
(0, functions_1.listarProdutos)();
(0, functions_1.excluirProduto)(1);
// 5. Crie um programa para mostrar informações de usuários (User) de
// uma empresa. Crie o tipo User com as seguintes propriedades:
// nome, idade, ocupação e salário (opcional). Caso o salário do
// usuário não seja informado, mostre o valor “N/A”. Exemplo:
// a. “Daphne, 23 anos, analista de TI, salário R$ 1000”
// b. “Daphne, 23 anos, analista de TI, salário N/A”
console.log("Ex.5-------------------------------------------------------------------------------------------------------------------------");
const user001 = {
    nome: "Daphne",
    idade: 23,
    ocupacao: "analista de TI",
    salario: 1000,
};
const user002 = {
    nome: "Daphne",
    idade: 23,
    ocupacao: "analista de TI",
};
(0, functions_1.listarUsuarios)(user001);
(0, functions_1.listarUsuarios)(user002);
// 6. Usando o contexto do exercício 6, crie um tipo de usuário que
// representa funcionários da diretoria da empresa. O tipo Diretor deve
// conter as propriedades: nome, idade, salário (opcional) e nível de
// comissionamento (numérico). Crie uma função que receba um
// Diretor e mostre suas informações. Exemplos:
// a. “Diretor(a) Daphne, 23 anos, comissão nível 5, salário R$ 1000”
// b. “Diretor(a) Daphne, 23 anos, comissão nível 5, salário N/A”
console.log("Ex.6-------------------------------------------------------------------------------------------------------------------------");
const diretor001 = {
    nome: "Daphne",
    idade: 23,
    nivelComissionamento: 5,
    salario: 1000,
};
const diretor002 = {
    nome: "Daphne",
    idade: 23,
    nivelComissionamento: 5,
};
(0, functions_1.listarDiretores)(diretor001);
(0, functions_1.listarDiretores)(diretor002);
// 7. Crie um tipo que seja composto por um User OU por um Diretor
// usando interseção de tipos. Desenvolva uma função que receba
// uma lista desse novo tipo e, para cada item da lista, imprima:
// a. O mesmo que o exercício 5, em caso de objeto User.
// b. O mesmo que o exercício 6, em caso de objeto Diretor.
console.log("Ex.7-------------------------------------------------------------------------------------------------------------------------");
const pessoas = [
    {
        nome: "Daphne",
        idade: 23,
        nivelComissionamento: 5,
        salario: 1000,
    },
    {
        nome: "Daphne",
        idade: 23,
        nivelComissionamento: 5,
    },
    {
        nome: "Daphne",
        idade: 23,
        ocupacao: "analista de TI",
        salario: 1000,
    },
    {
        nome: "Daphne",
        idade: 23,
        ocupacao: "analista de TI",
    },
];
(0, functions_1.listarPessoas)(pessoas);
