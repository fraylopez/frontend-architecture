import { Product } from "../domain/Product";
import { ProductService } from "../infrastructure/ProductService";
import assert from "assert";

export class CartController {
  private service: ProductService;
  private products: Product[];
  constructor() {
    this.service = new ProductService();
    this.products = [];
  }

  addProductToCart(id: string) {
    const product = this.service.getProductById(id);
    assert(product, `Product with id ${id} not found`);
    this.products.push(product);
  }

  removeProductFromCart(id: string) {
    this.products = this.products.filter((product) => product.id !== id);
  }

  getProducts() {
    return this.products;
  }

  public checkout() {
    this.service.checkout();
  }
}
