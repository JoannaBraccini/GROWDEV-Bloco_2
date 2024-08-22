import { Imovel } from "./Imovel";

export class Novo extends Imovel {
  private precoExtra: number;
  constructor(endereco: string, preco: number, precoExtra: number) {
    super(endereco, preco);
    this.precoExtra = precoExtra;
  }
  acessarDados(): void {
    const valorImovel = this.preco + this.precoExtra;
    console.log(`Dados do Imóvel:
        Endereço: ${this.endereco}
        Valor: R$${valorImovel.toLocaleString("pt-BR", {
          minimumFractionDigits: 2,
        })}`);
  }
  imprimirValor(): void {
    const valorImovel = this.preco + this.precoExtra;
    console.log(
      `Este imóvel custa R$${valorImovel.toLocaleString("pt-BR", {
        minimumFractionDigits: 2,
      })}`
    );
  }
}
