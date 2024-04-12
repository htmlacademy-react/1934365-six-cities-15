import OfferForm from '../offer-form/offer-form';
import ReviewItem from '../review-item/review-item';
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
