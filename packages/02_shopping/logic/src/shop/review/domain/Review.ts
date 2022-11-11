import { IReviewPrimitives } from "../infrastucture/ReviewBackendSimulator";

export class Review {
    constructor(
        private readonly id: string,
        public readonly stars: number,
        public readonly comment: string | undefined,
    ) {

    }
    static fromPrivitives(primitives: IReviewPrimitives): Review {
        return new Review(primitives._id, primitives.stars, primitives.comment)
    }
}