import { Base } from "./Base";
import { Product } from "./Product";
import { User } from "./User";

export class Comment extends Base {
  public content: string;
  private _product: Product;
  private _fromUser: User;

  constructor(content: string, product: Product, fromUser: User) {
    super();
    this.content = content;
    this._product = product;
    this._fromUser = fromUser;
  }

  public get product(): Product {
    return this._product;
  }

  public get user(): User {
    return this._fromUser;
  }
}
