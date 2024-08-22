import { randomUUID } from "crypto";

export abstract class Base {
  private _id: string;

  constructor() {
    this._id = randomUUID(); //gera um id automático a cada instância nova
  }
}
