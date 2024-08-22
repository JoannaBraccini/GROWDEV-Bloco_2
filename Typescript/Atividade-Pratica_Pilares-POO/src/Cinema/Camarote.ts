import { Ingresso } from "./Ingresso";

export class Camarote extends Ingresso {
  private valorExtra: number;
  constructor(valor: number, valorExtra: number) {
    super(valor);
    this.valorExtra = valorExtra;
  }
  imprimeValor(): void {
    const valorCamarote = this.valor + this.valorExtra;
    console.log(`Valor do ingresso: R$${valorCamarote.toFixed(2)}`);
  }
}
