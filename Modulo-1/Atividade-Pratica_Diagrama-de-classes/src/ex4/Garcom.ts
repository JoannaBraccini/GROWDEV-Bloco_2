import { Cliente } from "./Cliente";
import { Cargo, Funcionario, Turno } from "./Funcionario";
import { Pedido } from "./Pedido";
import { pedidos } from "./db/pedidos";
import { Cozinheiro } from "./Cozinheiro";

export class Garcom implements Funcionario {
  nome: string;
  cargo: Cargo;
  turno: Turno;

  constructor(nome: string, turno: Turno) {
    this.nome = nome;
    this.cargo = "Garçom";
    this.turno = turno;
  }

  /**
   * anotarPedido
   */
  public anotarPedido(
    cliente: Cliente,
    itens: { prato: string; valor: number }[]
  ): void {
    const pedido = new Pedido(cliente, "Aguardando");
    pedido.adicionarAoPedido(itens);
    this.enviarPedido(pedido);
  }

  /**
   * enviarPedido
   */
  private enviarPedido(pedido: Pedido): string {
    pedidos.push(pedido);
    console.log(
      `Garçom ${
        this.nome
      } enviou o pedido de ${pedido.buscarNomeCliente()} para a cozinha.`
    );
    return pedido.idPedido; //não sei como utilizar esse dado para chamar automaticamente o cozinheiro aqui.
  }

  /**
   * entregarPedido
   */
  public entregarPedido(pedido: Pedido): void {
    pedido.atualizarStatus("Atendido");
    console.log(
      `Garçom ${
        this.nome
      } entregou o pedido para ${pedido.buscarNomeCliente()}.`
    );
  }
}
