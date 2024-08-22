import { FormatoDeElemento } from "./FormatoDeElemento";

export class Circulo implements FormatoDeElemento {
  raio: number;
  constructor(raio: number) {
    this.raio = raio;
  }
  desenhar(): void {
    console.log("Desenhando um círculo com raio", this.raio);
  }
  redimensionar(): void {
    this.raio += 5;
    console.log("Redimensionando círculo... Novo raio:", this.raio);
  }
}
