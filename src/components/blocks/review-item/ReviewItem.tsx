import { getRatingStatus } from '../../utils/utils';
import { ReviewType } from './types';
import { generateDate } from './utils';

export default function ReviewItem({ review }: { review: ReviewType }): JSX.Element {

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={review.user.avatarUrl} width="54" height="54" alt="Reviews avatar" />
        </div>
        <span className="reviews__user-name">{review.user.name}</span>
        {review.user.isPro
          ? <span className="offer__user-status">Pro</span>
          : null}
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{ width: `${getRatingStatus(review.rating)}%` }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {review.comment}
        </p>
        <time className="reviews__time" dateTime={new Date().toISOString().split('T')[0]}>{generateDate(review)}</time>
      </div>
    </li>
  );
}
