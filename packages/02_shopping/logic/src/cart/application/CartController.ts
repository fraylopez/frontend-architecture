import { ProductService } from "../../_shared/infrastructure/ProductService";
import assert from "assert";
import { ProductList } from "../../_shared/domain/ProductList";
import { CartProduct } from "../domain/CartProduct";

export class CartController {
  private service: ProductService;
  private productList: ProductList<CartProduct>;
  constructor() {
    this.service = new ProductService();
    this.productList = new ProductList();
  }

  addProductToCart(id: string) {
    const product = this.service.getProductById(id);
    assert(product, `Product with id ${id} not found`);
    let productToAdd = new CartProduct(product!.id, product!.name, product!.price, 1);
    if (this.productList.hasProduct(id)) {
      const existingProduct = this.productList.findProduct(id);
      productToAdd = existingProduct!.increase();
      this.productList.removeProduct(id);
      this.productList.addProduct(productToAdd);
    }
    else {
      this.productList.addProduct(productToAdd);
    }
  }

  decreateProductQuantity(id: string) {
    if (this.productList.hasProduct(id)) {
      const existingProduct = this.productList.findProduct(id);
      const productDecreased = existingProduct!.decrease();
      this.productList.removeProduct(id);
      this.productList.addProduct(productDecreased);
    }
  }

  deleteProductFromCart(id: string) {
    this.productList.removeProduct(id);
  }


  getProducts() {
    return this.productList.products;
  }

  checkout() {
    this.service.checkout();
    this.emptyCart();
  }

  private emptyCart() {
    this.productList.empty();
  }

}

export const cartController = new CartController();
