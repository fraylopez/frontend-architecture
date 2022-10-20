import { gProvide } from "@goinapp/gshell-native";
import { CartController, cartController } from "@goinapp/logic/src/cart/application/CartController";

@gProvide()
export class CartUIStore {
  private readonly cartController: CartController;
  constructor() {
    this.cartController = cartController;
  }

  getTotal(): number {
    return this.getProducts().reduce((total, product) => total + product.price * product.quantity, 0);
  }

  decreaseQuantity(id: string) {
    this.cartController.decreateProductQuantity(id);
  }

  increaseQuantity(id: string) {
    this.cartController.addProductToCart(id);
  }

  getProducts() {
    return this.cartController.getProducts();
  }

  checkout() {
    this.cartController.checkout();
  }

  deleteProduct(id: string) {
    this.cartController.deleteProductFromCart(id);
  }

}
