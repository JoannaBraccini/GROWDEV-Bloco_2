export abstract class Imovel {
  protected endereco: string;
  protected preco: number;
  constructor(endereco: string, preco: number) {
    this.endereco = endereco;
    this.preco = preco;
  }
}
