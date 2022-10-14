import {  gProvide } from "@goinapp/gshell-native";
import { Product } from "@goinapp/logic/src/cart/domain/Product";
import {action} from "mobx"
import { CartController } from "@goinapp/logic/src/cart/application/CartController";
import {  ProductController } from "@goinapp/logic/src/cart/application/ProductController";

@gProvide()
export class ProductBrowserUIStore {
  private cartController:CartController
  private productController:ProductController
  constructor(){
    this.cartController = new CartController()
    this.productController = new ProductController()
  }

  @action
  addToCart(product: Product) {
    this.cartController.addProductToCart(product.id);
  }

  getAllProducts() {
    return this.productController.getAllProducts()
  }
}
