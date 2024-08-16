import { Cliente } from "./Cliente";
import { pedidos } from "./db/pedidos";
import { Cargo, Funcionario, Turno } from "./Funcionario";

export class Caixa implements Funcionario {
  nome: string;
  cargo: Cargo;
  turno: Turno;

  constructor(nome: string, turno: Turno) {
    this.nome = nome;
    this.cargo = "Caixa";
    this.turno = turno;
  }

  /**
   * calcularConta
   */
  public calcularConta(idPedido: string): void {
    const pedido = pedidos.find((pedido) => pedido.idPedido === idPedido);

    if (pedido) {
      const total: number = pedido.calcularTotal();
      console.log(
        `O total da conta para o pedido ${idPedido} é R$ ${total.toFixed(2)}`
      );
      const cliente: Cliente = pedido.getCliente();
      cliente.pagarConta(total, pedido);
    } else {
      console.log(`Pedido com ID ${idPedido} não encontrado.`);
    }
  }
}
