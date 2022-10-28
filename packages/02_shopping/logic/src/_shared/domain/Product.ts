import { observable } from "mobx";
export interface IProduct {
  id: string;
  name: string;
  price: number;
  stock: number;
}
export class Product {
  @observable
  readonly name: string;
  @observable
  readonly price: number;
  @observable
  readonly stock: number;

  constructor(readonly id: string, name: string, price: number, stock: number) {
    this.name = name;
    this.price = price;
    this.stock = stock;
  }

  static fromPrivitives(product: IProduct): Product {
    return new Product(product.id, product.name, product.price, product.stock)
  }
}
