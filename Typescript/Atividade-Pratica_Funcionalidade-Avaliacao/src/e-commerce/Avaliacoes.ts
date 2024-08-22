/*Adicione uma nova feature: Avaliações.
a. Um usuário poderá criar uma avaliação sob um produto
específico.
b. Um produto pode receber N avaliações.
c. A avaliação consiste em uma nota de 0 a 5.
d. Ao mostrar um produto, além dos comentários deve ser
mostrada a média de avaliações.*/

import { Base } from "./Base";

export class Avaliacoes extends Base {
  private _idUsuario: string;
  private _idProduto: string;
  public avaliacao: number;

  constructor(
    idUsuario: string,
    idProduto: string,
    avaliacao: 0 | 1 | 2 | 3 | 4 | 5
  ) {
    super();
    this._idUsuario = idUsuario;
    this._idProduto = idProduto;
    this.avaliacao = avaliacao;
  }

  validaAvaliacao(): boolean {
    return this.avaliacao >= 0 && this.avaliacao <= 5;
  }
}
