"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calcularMediaSimples = calcularMediaSimples;
exports.calcularMediaPonderada = calcularMediaPonderada;
exports.calcularSaldo = calcularSaldo;
exports.cadastrarProduto = cadastrarProduto;
exports.listarProdutos = listarProdutos;
exports.excluirProduto = excluirProduto;
exports.listarUsuarios = listarUsuarios;
exports.listarDiretores = listarDiretores;
exports.listarPessoas = listarPessoas;
// 1. Crie uma função que receba 2 números e retorne um objeto
// contendo a média e também um indicador booleano de
// aprovado/reprovado. Considere aprovado com média >= 6.
function calcularMediaSimples(nota1, nota2) {
    const media = (nota1 + nota2) / 2;
    const aprovado = media >= 6;
    return { media, aprovado };
}
// 2. Crie uma função que receba uma lista de objetos contendo nota e
// peso, realize a média das notas considerando o peso. Exemplos:
// Lista com 2 notas: (N1*P1) + (N2*P2) / 2 = Resultado
// Lista com 3 notas: (N1*P1) + (N2*P2) + (N3*P3) / 3 = Resultado
function calcularMediaPonderada(medias) {
    let somaNotas = 0;
    let somaPesos = 0;
    medias.forEach(({ nota, peso }) => {
        somaNotas += nota * peso;
        somaPesos += peso;
    });
    return somaPesos !== 0 ? somaNotas / somaPesos : 0; //se somaPesos for 0 retorna 0, senão faz a média ponderada
}
// 3. Crie um programa que simule uma carteira de dinheiro. Este
// programa vai precisar ter uma carteira contendo saldo, transações
// de entrada e saídas. Ou seja, será um objeto com estas
// propriedades. Depois crie uma função para lançar uma entrada e
// uma saída. Caso ao lançar uma saída e não tiver saldo, precisa dar
// um erro ou avisar.
function calcularSaldo(saldoCarteira) {
    let saldoAtual = 0;
    saldoCarteira.forEach((transacao) => {
        saldoAtual = transacao.saldo + transacao.entrada - transacao.saida;
    });
    if (saldoAtual < 0) {
        console.log("Transação cancelada. Saldo insuficiente.");
        return;
    }
    else {
        console.log("Transação efetuada com sucesso. Saldo atualizado:", saldoAtual.toFixed(2));
        return;
    }
}
// 4. Crie um programa para cadastrar, listar e excluir produtos de uma
// lista com tipagem de Produto.
const produtos = [];
let proximoId = 1;
function cadastrarProduto(nome, preco) {
    const novoProduto = {
        id: proximoId++,
        nome,
        preco,
    };
    produtos.push(novoProduto);
    console.log(novoProduto, "cadastrado com sucesso.");
}
function listarProdutos() {
    if (produtos.length === 0) {
        console.log("Nenhum produto cadastrado!");
        return;
    }
    console.log("Produtos cadastrados:");
    produtos.forEach((produto) => {
        console.log(`ID: ${produto.id} | Nome: ${produto.nome} | Preço: ${produto.preco.toFixed(2)}`);
    });
}
function excluirProduto(id) {
    const indiceProduto = produtos.findIndex((produto) => produto.id === id);
    if (indiceProduto === -1) {
        console.log("Produto não encontrado!");
        return;
    }
    const produtoExcluido = produtos.splice(indiceProduto, 1);
    console.log(produtoExcluido[0].nome, "- Produto removido com sucesso!");
}
// 5. Crie um programa para mostrar informações de usuários (User) de
// uma empresa. Crie o tipo User com as seguintes propriedades:
// nome, idade, ocupação e salário (opcional). Caso o salário do
// usuário não seja informado, mostre o valor “N/A”. Exemplo:
// a. “Daphne, 23 anos, analista de TI, salário R$ 1000”
// b. “Daphne, 23 anos, analista de TI, salário N/A”
function listarUsuarios(user) {
    const salario = user.salario !== undefined ? `R$ ${user.salario.toFixed(2)}` : "N/A";
    console.log(`${user.nome}, ${user.idade} anos, ${user.ocupacao}, salário ${salario}`);
}
// 6. Usando o contexto do exercício 6, crie um tipo de usuário que
// representa funcionários da diretoria da empresa. O tipo Diretor deve
// conter as propriedades: nome, idade, salário (opcional) e nível de
// comissionamento (numérico). Crie uma função que receba um
// Diretor e mostre suas informações. Exemplos:
// a. “Diretor(a) Daphne, 23 anos, comissão nível 5, salário R$ 1000”
// b. “Diretor(a) Daphne, 23 anos, comissão nível 5, salário N/A”
function listarDiretores(diretor) {
    const salario = diretor.salario !== undefined ? `R$ ${diretor.salario.toFixed(2)}` : "N/A";
    console.log(`Diretor(a) ${diretor.nome}, ${diretor.idade} anos, comissão nível ${diretor.nivelComissionamento}, salário ${salario}`);
}
// 7. Crie um tipo que seja composto por um User OU por um Diretor
// usando interseção de tipos. Desenvolva uma função que receba
// uma lista desse novo tipo e, para cada item da lista, imprima:
// a. O mesmo que o exercício 5, em caso de objeto User.
// b. O mesmo que o exercício 6, em caso de objeto Diretor.
function listarPessoas(pessoas) {
    pessoas.forEach((pessoa) => {
        const salario = pessoa.salario !== undefined ? `R$ ${pessoa.salario.toFixed(2)}` : "N/A";
        if ("nivelComissionamento" in pessoa) {
            console.log(`Diretor(a) ${pessoa.nome}, ${pessoa.idade} anos, comissão nível ${pessoa.nivelComissionamento}, salário ${salario}`);
        }
        else {
            console.log(`${pessoa.nome}, ${pessoa.idade} anos, ${pessoa.ocupacao}, salário ${salario}`);
        }
    });
}
