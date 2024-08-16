import { FormatoDeElemento } from "./FormatoDeElemento";

export class Retangulo implements FormatoDeElemento {
  comprimento: number;
  altura: number;
  constructor(comprimento: number, altura: number) {
    this.comprimento = comprimento;
    this.altura = altura;
  }
  desenhar(): void {
    console.log(
      `Desenhando um retângulo com ${this.comprimento} de comprimento e ${this.altura} de altura...`
    );
  }
  redimensionar(): void {
    this.comprimento += 5;
    this.altura += 5;
    console.log(
      "Redimensionando retângulo... Novas medidas:",
      this.comprimento,
      "X",
      this.altura
    );
  }
}
