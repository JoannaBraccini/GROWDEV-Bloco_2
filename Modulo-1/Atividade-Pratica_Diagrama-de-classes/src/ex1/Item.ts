export interface DataItem {
  valor: number;
  nome: string;
  descricao: string;
}

export class Item {
  valor: number;
  nome: string;
  descricao: string;

  constructor(param: DataItem) {
    this.valor = param.valor;
    this.nome = param.nome;
    this.descricao = param.descricao;
  }
}
