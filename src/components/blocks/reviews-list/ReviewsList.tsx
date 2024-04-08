import OfferForm from '../offer-form/OfferForm';
import ReviewItem from '../review-item/ReviewItem';
import { ReviewType } from '../review-item/types';

export default function Reviews({ isAuth, reviews, id }: { isAuth: boolean; reviews: Array<ReviewType> | undefined; id: string }): JSX.Element {

  return (
    <>
      <ul className="reviews__list">
        {reviews?.map((review) => (
          <ReviewItem
            key={review.id}
            review={review}
          />
        ))}
      </ul>
      {isAuth && <OfferForm id={id} />}
    </>

  );
}
