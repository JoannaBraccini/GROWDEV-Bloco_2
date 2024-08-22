// 3. Crie uma classe para implementar uma conta corrente. A classe
// deve possuir os seguintes atributos:
// a. Número da conta
// b. Nome do correntista
// c. Saldo
// Os métodos são os seguintes:
// a) Alterar nome
// b) Deposito
// c) Saque
// No construtor, o saldo é opcional, com valor padrão zero e os
// demais atributos são obrigatórios. A conta não pode ficar com saldo
// negativo.

export class ContaCorrente {
  numeroConta: number;
  nomeCorrentista: string;
  saldoConta?: number;
  transacoes: string[];

  constructor(
    numeroConta: number,
    nomeCorrentista: string,
    saldoConta?: number
  ) {
    this.numeroConta = numeroConta;
    this.nomeCorrentista = nomeCorrentista;
    this.saldoConta = saldoConta ?? 0;
    this.transacoes = [];
  }

  alterarNome(novoNome: string): string {
    this.nomeCorrentista = novoNome;
    return "Nome alterado para " + this.nomeCorrentista;
  }
  fazerDeposito(valor: number): string {
    if (this.saldoConta != undefined) {
      this.saldoConta += valor;
      this.transacoes.push(`+R$${valor.toFixed(2)}`);
      return "Depósito efetuado. Saldo atual: " + this.saldoConta;
    } else {
      this.saldoConta = valor;
      this.transacoes.push(`+R$${valor.toFixed(2)}`);
      return "Depósito efetuado. Saldo atual: " + this.saldoConta;
    }
  }
  fazerSaque(valor: number): string {
    if (this.saldoConta == undefined || valor > this.saldoConta) {
      return (
        "Operação cancelada por saldo insuficiente. Saldo atual: " +
        this.saldoConta
      );
    } else {
      this.saldoConta -= valor;
      this.transacoes.push(`-R$${valor.toFixed(2)}`);
      return "Saque efetuado. Saldo atual: " + this.saldoConta;
    }
  }
  consultarSaldo(): string {
    if (this.saldoConta != undefined) {
      return `Saldo atual: R$${this.saldoConta.toFixed(2)}`;
    } else {
      return "Saldo atual: R$0,00";
    }
  }
  consultarExtrato(): string {
    return `------------------------------
|  Seu extrato bancário:     |\n|        ${this.transacoes.join(
      "           |\n|        "
    )}           |\n|  Saldo: R$${this.saldoConta?.toFixed(2)}           |
------------------------------`;
  }
}
