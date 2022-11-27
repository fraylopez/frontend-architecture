import { gProvide } from "@goinapp/gshell-native";
import { CartController, cartController } from "@goinapp/logic/src/shop/cart/application/CartController";
import { navigation, Navigation } from "@goinapp/logic/src/shop/_shared/domain/Navigation";

@gProvide()
export class CartUIStore {
  private readonly cartController: CartController;
  private readonly _navigation: Navigation;
  constructor() {
    this.cartController = cartController;
    this._navigation = navigation;
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

  goBack() {
    this._navigation.goBack();
  }

}
