import { Animal } from "./Animal";

export class Gato extends Animal {
  trabalhar(): void {
    console.log(
      this.nome + " está caçando na fazenda, ratos e pássaros são um banquete."
    );
  }
}
