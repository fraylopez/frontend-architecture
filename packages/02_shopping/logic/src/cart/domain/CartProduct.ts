import { observable } from "mobx";
import { Product } from "../../_shared/domain/Product";

export class CartProduct extends Product {
  @observable
  readonly quantity: number;

  constructor(readonly id: string, name: string, price: number, quantity: number,) {
    super(id, name, price);
    this.quantity = quantity;
  }

  increase() {
    return new CartProduct(this.id, this.name, this.price, this.quantity + 1);
  }

  decrease() {
    if (this.quantity > 0) {
      return new CartProduct(this.id, this.name, this.price, this.quantity - 1);
    }
    return new CartProduct(this.id, this.name, this.price, 0);
  }
}
