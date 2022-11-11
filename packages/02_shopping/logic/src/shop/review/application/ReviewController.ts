import { faker } from "@faker-js/faker";
import { ReviewService } from "../infrastucture/ReviewService";

export class ReviewController {
    private service: ReviewService;
    
    constructor() {
        this.service = new ReviewService();
    }

    getReviewsByProductId(productId: string) {
        return this.service.getReviews(productId)
    }
    getAverage(productId: string) {
        return this.service.getAverage(productId);
    }
}

export const reviewController = new ReviewController();
