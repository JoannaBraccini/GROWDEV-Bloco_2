import { ValorPedido } from "./interfaces";
import { Desconto } from "./interfaces";
import { ItemPedido } from "./ItemPedido";

export class PedidoEx implements ValorPedido, Desconto {
  public itens: ItemPedido[] = [];

  add(item: ItemPedido): void {
    this.itens.push(item);
    console.log(item.nome + " adicionado com sucesso");
  }

  recuperarValorTotal(): number {
    let total = this.itens
      .map((i) => i.recuperarValorTotal())
      .reduce((sum, v) => sum + v, 0);

    return parseFloat(total.toFixed(2));
  }

  aplicarDescontoEmPorcentagem(desconto: number): void {
    const porcentagem = desconto / 100;
    this.itens.forEach((item) => {
      const descontoEmReais = item.valor * porcentagem;
      item.aplicarDescontoEmReais(descontoEmReais);
    });
  }

  aplicarDescontoEmReais(desconto: number): void {
    const total = this.recuperarValorTotal();
    const descontado = total - desconto;

    if (descontado < 0) {
      console.log("O desconto não pode ser maior que o valor total do pedido.");
    }
    const fatorDeReducao = descontado / total;

    this.itens.forEach((item) => {
      item.valor = item.valor * fatorDeReducao;
    });
  }

  removerItem(item: string): void {
    const index = this.itens.findIndex((i) => i.nome === item);
    if (index > -1) {
      this.itens.splice(index, 1);
      console.log(item + " removido com sucesso");
    }
  }
}
