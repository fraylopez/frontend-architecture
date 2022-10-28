import { Product } from "../../_shared/domain/Product";
export class BrowserProduct extends Product {
  // TODO: Anemic Domain Model
  constructor(id: string, name: string, price: number, stock: number) {
    super(id, name, price, stock);
  }
}