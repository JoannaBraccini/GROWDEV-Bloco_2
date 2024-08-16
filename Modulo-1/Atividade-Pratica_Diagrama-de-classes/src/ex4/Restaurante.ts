import { Cliente } from "./Cliente";
import { Cargo, Funcionario } from "./Funcionario";
import { clientes } from "./db/clientes";
import { funcionarios } from "./db/funcionarios";

export class Restaurante {
  private _nome: string;
  private _endereco: string;
  private _funcionarios!: Funcionario[];
  private _clientes!: Cliente[];

  constructor(nome: string, endereco: string) {
    this._nome = nome;
    this._endereco = endereco;
    this._funcionarios = [];
    this._clientes = [];
  }

  /**
   * adicionarCliente
   */
  public adicionarCliente(cliente: Cliente): void {
    this._clientes.push(cliente);
    clientes.push(cliente);
    console.log(`${cliente.toString()} Adicionado com sucesso.`);
  }

  /**
   * removerCliente
   */
  public removerCliente(nome: string): void {
    const encontrarCliente = clientes.findIndex(
      (cliente) => cliente.getCliente() === nome
    );
    if (encontrarCliente !== -1) {
      clientes.splice(encontrarCliente, 1);
      console.log(`Cliente ${nome} removido com sucesso.`);
    } else {
      console.log(`Cliente ${nome} não encontrado.`);
    }
  }

  /**
   * adicionarFuncionario
   */
  public adicionarFuncionario(funcionario: Funcionario): void {
    this._funcionarios.push(funcionario);
    funcionarios.push(funcionario);
    console.log(
      `${funcionario.cargo} ${funcionario.nome} adicionado com sucesso.`
    );
  }

  /**
   * removerFuncionario
   */
  public removerFuncionario(nome: string, cargo: Cargo): void {
    const encontrarFuncionario = funcionarios.findIndex(
      (funcionario) => funcionario.nome === nome && funcionario.cargo === cargo
    );
    if (encontrarFuncionario !== -1) {
      funcionarios.splice(encontrarFuncionario, 1);
      console.log(`Funcionário ${nome} removido com sucesso.`);
    } else {
      console.log(`Funcionário ${nome} não encontrado.`);
    }
  }
}
