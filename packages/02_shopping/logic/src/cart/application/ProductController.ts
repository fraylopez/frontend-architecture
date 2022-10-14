import { ProductService } from "../infrastructure/ProductService";

export class ProductController {
  private service: ProductService;
  constructor() {
    this.service = new ProductService();
  }

  getAllProducts() {
    return this.service.getAllProducts();
  }
}
