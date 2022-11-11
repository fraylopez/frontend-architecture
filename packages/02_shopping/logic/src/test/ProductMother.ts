import { faker } from "@faker-js/faker";
import { Product } from "./Product";


export class ProductMother {
  static create(id: string, name: string, price: number) {
    return new Product(id, name, price);
  }

  static createRandom() {
    return ProductMother.create(
      faker.datatype.uuid(),
      faker.commerce.productName(),
      faker.datatype.float({ min: 2, max: 99 })
    );
  }

  static createRandomList(count: number = 2) {
    return Array.from({ length: count }, () => this.createRandom());
  }
}
