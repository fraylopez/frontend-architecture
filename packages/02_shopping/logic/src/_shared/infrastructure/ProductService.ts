import { CartProductMother } from "../../cart/domain/CartProductMother";
import { ProductMother } from "../domain/ProductMother";

const allProducts = ProductMother.createRandomList(100);

export class ProductService {
  getAllProducts() {
    return allProducts;
  }

  getProductById(id: string) {
    return allProducts.find((product) => product.id === id);
  }

  checkout() {
    console.log('checkout');
  }
}
