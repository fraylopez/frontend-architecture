import { faker } from "@faker-js/faker";

export class StarsController {
  getStarsForProduct(productId: string) {
    return faker.datatype.number({ min: 1, max: 5 });
  }
}

export const starsController = new StarsController();
