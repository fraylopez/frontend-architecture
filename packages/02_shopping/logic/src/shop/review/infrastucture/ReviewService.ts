import { faker } from "@faker-js/faker";
import { Review } from "../domain/Review";
import { IReviewPrimitives, ReviewBackendSimulator } from "./ReviewBackendSimulator";

const allReviews = ReviewBackendSimulator.getReviews(100);

export class ReviewService {
    getReviews(productId: string): Review[] {
        return allReviews.map(this.toDomain);
      }
    
      getAverage(productId: string) {
        return faker.datatype.number({min:1, max:5})
      }
    private toDomain(review: IReviewPrimitives): Review {
        return Review.fromPrivitives(review);
      }
}