import { Base } from "./Base";
import { Product } from "./Product";

export class User extends Base {
  public name: string;
  public username: string;
  public email: string;
  protected _cart: Product[];

  constructor(name: string, username: string, email: string) {
    super();
    this.name = name;
    this.username = username;
    this.email = email;
    this._cart = [];
  }

  public addToCart(product: Product): void {
    this._cart.push(product);
    console.log(product.name + " adicionado ao carrinho.");
  }

  public removeFromCart(product: Product): void {
    const index = this._cart.findIndex((item) => item === product);
    if (index === -1) {
      console.log(product.name + " não está no carrinho.");
    } else {
      console.log(product.name + " excluído com sucesso.");
      this._cart.splice(index, 1);
    }
  }
  public showCart(): string {
    const SumCart = this._cart.reduce((prev, acc) => prev + acc.value, 0);
    const mappedCart = this._cart.map((product) => product.name).join(", ");
    console.log(`Carrinho: \n${mappedCart}\nTotal do carrinho: ${SumCart}`);
    return "";
  }
}
