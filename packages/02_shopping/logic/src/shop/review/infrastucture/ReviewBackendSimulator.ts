import { faker } from "@faker-js/faker";

export interface IReviewPrimitives {
  _id: string;
  stars: number;
  comment?: string;
}

export class ReviewBackendSimulator {
  static getReviews(count: number = 2): IReviewPrimitives[] {
    return Array.from({ length: count }, () => this.getRandomReview());
  }

  static getRandomReview(): IReviewPrimitives {
    return {
      _id: faker.datatype.uuid(),
      stars: Math.floor(Math.random() * 5) + 1
    }
  }
}