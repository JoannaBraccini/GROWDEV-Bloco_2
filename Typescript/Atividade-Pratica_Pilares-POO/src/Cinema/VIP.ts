import { Ingresso } from "./Ingresso";

export class VIP extends Ingresso {
  private valorExtra: number;
  constructor(valor: number, valorExtra: number) {
    super(valor);
    this.valorExtra = valorExtra;
  }
  imprimeValor(): void {
    const valorVip = this.valor + this.valorExtra;
    console.log(`Valor do ingresso: R$${valorVip.toFixed(2)}`);
  }
}
