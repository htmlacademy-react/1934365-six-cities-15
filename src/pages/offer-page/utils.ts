import { ReviewType } from '../../components/blocks/review-item/types';
import { MAX_REVIEW_ITEMS_AMOUNT } from '../../components/utils/constants';

export const getSortedReviews = (reviews: ReviewType[]) => {
  if (reviews.length > 0) {
    const arr = [...reviews]
    return arr.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()).slice(0, MAX_REVIEW_ITEMS_AMOUNT);
  }
}
