import {   gProvide } from "@goinapp/gshell-native";
import { Product } from "@goinapp/logic/src/_shared/domain/Product";
import { CartController ,cartController} from "@goinapp/logic/src/cart/application/CartController";
import {  ProductController, productController } from "@goinapp/logic/src/cart/application/ProductController";

@gProvide()
export class ProductBrowserUIStore {
  private cartController:CartController
  private productController:ProductController
  constructor(){
    this.cartController =cartController
    this.productController =productController
  }

  addToCart(product: Product) {
    this.cartController.addProductToCart(product.id);
  }

  getAllProducts() {
    return this.productController.getAllProducts()
  }
}

