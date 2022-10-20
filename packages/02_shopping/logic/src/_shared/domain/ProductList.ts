import { observable, computed, action } from "mobx";
import { Product } from "./Product";

export class ProductList<T extends Product> {

  @observable
  private _products: T[];

  constructor(products: T[] = []) {
    this._products = products;
  }

  @computed get products() {
    return this._products;
  }

  @action
  addProduct(product: T) {
    this._products.push(product);
  }

  findProduct(id: string) {
    return this.products.find((product) => product.id === id);
  }

  hasProduct(id: string) {
    return this.findProduct(id) !== undefined;
  }

  @action
  removeProduct(id: string) {
    this._products = this.products.filter((product) => product.id !== id);
  }

  @action
  replaceProduct(product: T) {
    const index = this._products.findIndex((p) => p.id === product.id);
    if (index !== -1) {
      this._products[index] = product;
    }
  }

  @action
  empty() {
    this._products.splice(0, this._products.length);
  }

}
