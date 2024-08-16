import { cardapio } from "./db/cardapio";
import { Pedido } from "./Pedido";
import { Garcom } from "./Garcom";

export class Cliente {
  private _nome: string;
  private _mesa: number;

  constructor(nome: string, mesa: number) {
    this._nome = nome;
    this._mesa = mesa;
  }

  /**
   * pedirMenu
   */
  public pedirMenu(): void {
    cardapio.forEach((item, index) => {
      console.log(`
        ${index}. ${item.prato} - R$ ${item.valor}
        -----------------------`);
    });
  }

  /**
   * fazerPedido
   */
  public fazerPedido(
    garcom: Garcom,
    itens: { prato: string; valor: number }[]
  ): void {
    garcom.anotarPedido(this, itens);
  }

  /**
   * pagarConta
   */
  public pagarConta(total: number, pedido: Pedido): void {
    pedido.atualizarStatus("Pago");
    console.log(`Pagamento de R$ ${total} realizado.`);
  }

  /**
   * getter
   */
  public getCliente(): string {
    return this._nome;
  }

  public toString(): string {
    return `Cliente ${this._nome}: Mesa ${this._mesa}.`;
  }
}
