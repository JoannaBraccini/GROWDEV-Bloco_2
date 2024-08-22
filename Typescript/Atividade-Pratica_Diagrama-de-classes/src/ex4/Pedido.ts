import { randomUUID } from "crypto";
import { Cliente } from "./Cliente";

export type Status =
  | "Aguardando"
  | "Em preparação"
  | "Pronto para retirar"
  | "Atendido"
  | "Pago";

export class Pedido {
  getCliente
  /**
   * atualizarStatus
   */(): Cliente {
    throw new Error("Method not implemented.");
  }
  getTotal() {
    throw new Error("Method not implemented.");
  }
  private _id: string;
  private _cliente: Cliente;
  private _cardapio: { prato: string; valor: number }[];
  private _status: Status;

  constructor(cliente: Cliente, status: Status) {
    this._id = randomUUID();
    this._cliente = cliente;
    this._status = status;
    this._cardapio = [];
  }

  /**
   * adicionarAoPedido
   */
  public adicionarAoPedido(itens: { prato: string; valor: number } | { prato: string; valor: number }[]): void {
    if (Array.isArray(itens)) {
      this._cardapio.push(...itens);
    } else {
      this._cardapio.push(itens);
    }
  }

  /**
   * atualizarStatus
   */
  public atualizarStatus(status: Status): void {
    this._status = status;
  }
  /**
   * buscarNomeCliente
   */
  public buscarNomeCliente(): string {
    return this._cliente.getCliente();
  }

  /**
   * calcularTotal
   *
   */
  public calcularTotal(): number {
    return this._cardapio.reduce((soma, item) => soma + item.valor, 0);
  }

  /*getter id do pedido */
  public get idPedido(): string {
    return this._id;
  }
}
