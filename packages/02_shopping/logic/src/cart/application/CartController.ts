import { ProductList } from "../domain/ProductList";
import { ProductService } from "../infrastructure/ProductService";
import assert from "assert";

export class CartController {
  private service: ProductService;
  private productList: ProductList;
  constructor() {
    this.service = new ProductService();
    this.productList = new ProductList();
  }

  addProductToCart(id: string) {
    const product = this.service.getProductById(id);
    assert(product, `Product with id ${id} not found`);
    this.productList.addProduct(product!);
  }

  removeProductFromCart(id: string) {
    this.productList.removeProduct(id);
  }

  getProducts() {
    return this.productList.products;
  }

  public checkout() {
    this.service.checkout();
  }
}
