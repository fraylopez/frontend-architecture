import { observable } from "mobx";

export class Product {
  @observable
  readonly name: string;
  @observable
  readonly quantity: number;

  @observable
  readonly price: number;

  constructor(readonly id: string, name: string, quantity: number, price: number) {
    this.name = name;
    this.quantity = quantity;
    this.price = price;
  }
}
