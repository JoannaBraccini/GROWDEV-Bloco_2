import { Animal } from "./Animal";

export class Cachorro extends Animal {
  trabalhar(): void {
    console.log(
      this.nome + " está de guarda na fazenda, vigiando os outros animais."
    );
  }
}
