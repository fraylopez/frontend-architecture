import { gProvide } from "@goinapp/gshell-native";
import { Product } from "@goinapp/logic/src/shop/_shared/domain/Product";
import {
  CartController,
  cartController,
} from "@goinapp/logic/src/shop/cart/application/CartController";
import {
  ProductController,
  productController,
} from "@goinapp/logic/src/shop/product/application/ProductController";
import {
  ReviewController,
  reviewController,
} from "@goinapp/logic/src/shop/review/application/ReviewController";

export interface ProductWithStars extends Product{
 stars: number
}

@gProvide()
export class CatalogScreenUIStore {
  private cartController: CartController;
  private productController: ProductController;
  private reviewController: ReviewController;

  constructor() {
    this.cartController = cartController;
    this.productController = productController;
    this.reviewController = reviewController;
  }

  addToCart(product: Product) {
    this.cartController.addProductToCart(product.id);
  }

  getAllProducts(): ProductWithStars[] {
    return this.productController.getAllProducts().map((product) => ({
      ...product,
      stars: this.reviewController.getAverage(product.id),
    }));
  }
}
