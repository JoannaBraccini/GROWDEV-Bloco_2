// 1. Crie uma classe Contador, que encapsule um valor usado para
// contagem de itens ou eventos. A classe deve oferecer métodos que
// devem:
// a) Zerar;
// b) Incrementar;
// c) Retornar o valor do contador.

export class Contador {
  contagem: number;

  constructor() {
    this.contagem = 0;
  }

  zerarContador(): string {
    this.contagem = 0;
    return "Contador zerado";
  }
  incrementarContador(): number {
    return ++this.contagem;
  }
  mostrarContador(): string {
    return "O contador está em " + this.contagem;
  }
}
