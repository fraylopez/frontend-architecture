import { observable } from "mobx";

export class Product {
  @observable
  readonly name: string;
  @observable
  readonly price: number;

  constructor(readonly id: string, name: string, price: number) {
    this.name = name;
    this.price = price;
  }
}
