import { Animal } from "./Animal";

export class Cavalo extends Animal {
  trabalhar(): void {
    console.log(this.nome + " está puxando uma carroça na fazenda.");
  }
}
