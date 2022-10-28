import assert from "assert";
import { Product } from "../domain/Product";
import { BackendSimulator, IProduct } from "./BackendSimulator";

const allProducts = BackendSimulator.getProducts(100);

export class ProductService {
  getAllProducts() {
    return allProducts.map(this.toDomain);
  }

  getProductById(id: string) {
    const product = allProducts.find((product) => product._id === id);
    assert(product, `Product with id ${id} not found`);
    return this.toDomain(product);
  }

  checkout() {
    console.log('checkout');
  }

  private toDomain(product: IProduct): Product {
    return Product.fromPrivitives({
      id: product._id,
      name: product.name,
      price: product.price,
      stock: product.stock,
    });
  }
}
