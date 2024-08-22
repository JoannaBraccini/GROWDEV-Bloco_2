import { Imovel } from "./Imovel";

export class Velho extends Imovel {
  private desconto: number;
  constructor(endereco: string, preco: number, desconto: number) {
    super(endereco, preco);
    this.desconto = desconto;
  }
  acessarDados(): void {
    const valorImovel = this.preco - this.desconto;
    console.log(`Dados do Imóvel:
        Endereço: ${this.endereco}
        Valor: R$${valorImovel.toLocaleString("pt-BR", {
          minimumFractionDigits: 2,
        })}`);
  }
  imprimirValor(): void {
    const valorImovel = this.preco - this.desconto;
    console.log(
      `Este imóvel custa R$${valorImovel.toLocaleString("pt-BR", {
        minimumFractionDigits: 2,
      })}`
    );
  }
}
