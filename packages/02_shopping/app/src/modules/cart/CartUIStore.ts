import { gProvide } from "@goinapp/gshell-native";
import { CartController } from "@goinapp/logic/src/cart/application/CartController";

@gProvide()
export class CartUIStore {
  private readonly cartController: CartController;
  constructor() {
    this.cartController = new CartController();
  }

  getTotal(): number {
    return this.getProducts().reduce((total, product) => total + product.price * product.quantity, 0);
  }

  addProductToCart(id: string) {
    this.cartController.addProductToCart(id);
  }

  removeProductFromCart(id: string) {
    this.cartController.removeProductFromCart(id);
  }

  getProducts() {
    return this.cartController.getProducts();
  }

  checkout() {
    this.cartController.checkout();
  }

}
