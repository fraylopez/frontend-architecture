import { observable, computed, action } from "mobx";
import { Product } from "./Product";

export class ProductList {
  @observable
  private _products: Product[];

  constructor(products: Product[] = []) {
    this._products = products;
  }

  @computed get products() {
    return this._products;
  }

  @action
  addProduct(product: Product) {
    this._products.push(product);
  }

  @action
  removeProduct(id: string) {
    this._products = this.products.filter((product) => product.id !== id);
  }
}
