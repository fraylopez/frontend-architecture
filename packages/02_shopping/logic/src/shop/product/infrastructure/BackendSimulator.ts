import { faker } from "@faker-js/faker";

export interface IProduct {
  _id: string;
  name: string;
  price: number;
  stock: number;
  url: string;
}

export class BackendSimulator {
  static getProducts(count: number = 2): IProduct[] {
    return Array.from({ length: count }, () => this.getRandomProduct());
  }

  static getRandomProduct(): IProduct {
    return {
      _id: faker.datatype.uuid(),
      name: faker.commerce.productName(),
      price: faker.datatype.float({ min: 2, max: 99 }),
      stock: faker.datatype.number({ min: 1, max: 50 }),
      url: faker.image.imageUrl()
    }
  }
}