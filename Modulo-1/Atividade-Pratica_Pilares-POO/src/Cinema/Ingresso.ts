export abstract class Ingresso {
  protected valor: number;

  constructor(valor: number) {
    this.valor = valor;
  }

  imprimeValor(): void {
    const valor = this.valor;
    console.log(`Valor do ingresso: R$${valor.toFixed(2)}`);
  }
}
