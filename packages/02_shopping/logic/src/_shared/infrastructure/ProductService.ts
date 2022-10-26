import { BrowserProduct } from "../../browser/domain/BrowserProduct";
import { BackendSimulator } from "./BackendSimulator";

const allProducts = BackendSimulator.getProducts(100);

export class ProductService {
  getAllProducts() {
    return allProducts.map(product => BrowserProduct.fromPrivitives(product));
  }

  getProductById(id: string) {
    return allProducts.find((product) => product.id === id);
  }

  checkout() {
    console.log('checkout');
  }
}
