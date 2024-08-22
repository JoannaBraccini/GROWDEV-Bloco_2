import { Item } from "./Item";

export interface DataPedido {
  itens: Item[]; //valorTotal não precisa ser informado como parâmetro, já que será calculado depois
}

export class Pedido {
  itens: Item[];
  valorTotal: number;

  constructor(param: DataPedido) {
    this.itens = param.itens || []; //se nada for informado, é uma string vazia
    this.valorTotal = this.calcularValorTotal(); //função para calcular o valor
  }

  getItens(): Item[] {
    //não precisa de um get real quando tudo é público
    return this.itens;
  }

  setItens(itens: Item[]): void {
    //não precisa de um set real quando tudo é público
    this.itens = itens;
    this.valorTotal = this.calcularValorTotal();
  }

  adicionarItem(item: Item): void {
    this.itens.push(item);
    this.somarValor(item.valor);
  }

  somarValor(valor: number): void {
    this.valorTotal += valor;
  }

  adicionarPedido(pedido: Pedido): void {
    for (const item of pedido.itens) {
      this.adicionarItem(item);
    }
  }

  private calcularValorTotal(): number {
    return this.itens.reduce((total, item) => total + item.valor, 0);
  }
}
