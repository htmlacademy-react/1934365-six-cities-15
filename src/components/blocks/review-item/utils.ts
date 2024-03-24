import { ReviewType } from "./types";

export const generateDate = (review: ReviewType) => {
const date = new Date(review.date);
const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long' };
const reviewDate = new Intl.DateTimeFormat('en-US', options).format(date);
return reviewDate
}
