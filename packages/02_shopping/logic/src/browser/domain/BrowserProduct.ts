import { observable } from "mobx";
import { Product } from "../../_shared/domain/Product";
import { IProduct } from "../../_shared/infrastructure/BackendSimulator";

export class BrowserProduct extends Product {
  @observable
  readonly stock: number;

  constructor(readonly id: string, name: string, price: number, stock: number) {
    super(id, name, price);
    this.stock = stock;
  }

  static fromPrivitives(product: IProduct): BrowserProduct {
    return new BrowserProduct(product.id, product.name, product.price, product.stock)
  }
}