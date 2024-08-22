import { Cargo, Funcionario, Turno } from "./Funcionario";
import { Pedido } from "./Pedido";
import { pedidos } from "./db/pedidos";

export class Cozinheiro implements Funcionario {
  nome: string;
  cargo: Cargo;
  turno: Turno;

  constructor(nome: string, turno: Turno) {
    this.nome = nome;
    this.cargo = "Cozinheiro";
    this.turno = turno;
  }

  /**
   * prepararPedido
   */
  public prepararPedido(pedido: Pedido): void {
    //como eu queria fazer mas não consigo pegar o id...
    const pedidoFeito = pedidos.find((p) => p.idPedido === pedido.idPedido);
    if (pedidoFeito) {
      pedido.atualizarStatus("Em preparação");

      console.log(
        `Cozinheiro ${
          this.nome
        } está preparando o pedido de ${pedido.buscarNomeCliente()}.`
      );

      setTimeout(() => {
        this.enviarPedido(pedido);
      }, 2000); // 2 segundos para simular a preparação
    } else {
      console.log("erro");
    }
  }

  /**
   * enviarPedido
   */
  private enviarPedido(pedido: Pedido): void {
    pedido.atualizarStatus("Pronto para retirar");
    console.log(
      `Pedido de ${pedido.buscarNomeCliente()} está pronto para retirar.`
    );
  }
}
