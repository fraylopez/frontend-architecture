import { faker } from "@faker-js/faker";
import { Product } from "./Product";



export class ProductMother {
  static create(id: string, name: string, quantity: number, price: number) {
    return new Product(id, name, quantity, price);
  }

  static createRandom() {
    return ProductMother.create(
      faker.datatype.uuid(),
      faker.commerce.productName(),
      faker.datatype.number({ min: 1, max: 5 }),
      faker.datatype.float({ min: 2, max: 99 })
    );
  }

  static createRandomList(count: number = 2) {
    return Array.from({ length: count }, () => this.createRandom());
  }
}
