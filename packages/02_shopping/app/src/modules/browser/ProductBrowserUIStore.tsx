import { gProvide } from "@goinapp/gshell-native";
import { Product } from "@goinapp/logic/src/_shared/domain/Product";
import {
  CartController,
  cartController,
} from "@goinapp/logic/src/cart/application/CartController";
import {
  ProductController,
  productController,
} from "@goinapp/logic/src/cart/application/ProductController";
import {
  StarsController,
  starsController,
} from "@goinapp/logic/src/stars/application/StarsController";

@gProvide()
export class ProductBrowserUIStore {
  private cartController: CartController;
  private productController: ProductController;
  private starsController: StarsController;

  constructor() {
    this.cartController = cartController;
    this.productController = productController;
    this.starsController = starsController;
  }

  addToCart(product: Product) {
    this.cartController.addProductToCart(product.id);
  }

  getAllProducts() {
    return this.productController.getAllProducts().map((product) => ({
      ...product,
      stars: this.starsController.getStarsForProduct(product.id),
    }));
  }
}
