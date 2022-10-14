import { faker } from "@faker-js/faker";
import { CartProduct } from "./CartProduct";

export class CartProductMother {
  static create(id: string, name: string, quantity: number, price: number) {
    return new CartProduct(id, name, quantity, price);
  }

  static createRandom() {
    return CartProductMother.create(
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
