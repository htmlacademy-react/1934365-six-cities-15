import { Fragment, MouseEvent, useState } from 'react';
import { useActionCreators, useAppSelector } from '../../../store/hooks';
import { reviewActions, reviewSelectors } from '../../../store/slices/review';
import { toast } from 'react-toastify';
import { MAX_TEXT_LENGTH, MIN_TEXT_LENGTH, RATING } from '../../utils/constants';
import { EventHandler } from './types';
import { RequestStatus } from '../../utils/types';

export default function OfferForm({ id }: { id: string }): JSX.Element {
  const [review, setReview] = useState({ rating: 0, comment: '' });
  const handleInputChange: EventHandler = (evt) => {
    const { name, value } = evt.currentTarget;
    setReview({ ...review, [name]: value });
  };
  const { postComment } = useActionCreators(reviewActions);
  const reviewStatus = useAppSelector(reviewSelectors.reviewStatus);
  const isLoading = reviewStatus === RequestStatus.Loading;

  const onSubmitButtonClick = (evt: MouseEvent) => {
    evt.preventDefault();
    postComment({ body: review, offerId: id })
      .unwrap()
      .then(() => {
        document.querySelectorAll<HTMLInputElement>('.form__rating-input').forEach((el) => {
          el.checked = false;
        });
        setReview({ rating: 0, comment: '' });
      })
      .catch(() => {
        toast.error('Server error');
      }
      );
  };

  return (
    <form className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {RATING.map((el) => (
          <Fragment key={el.value}>
            <input
              className="form__rating-input visually-hidden"
              name="rating"
              value={el.value}
              id={`${el.value}-stars`}
              type="radio"
              onChange={handleInputChange}
              disabled={isLoading}
            />
            <label htmlFor={`${el.value}-stars`} className="reviews__rating-label form__rating-label" title={el.label}>
              <svg className="form__star-image" width="37" height="33">
                <use xlinkHref="#icon-star"></use>
              </svg>
            </label>
          </Fragment>
        ))}
      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="comment"
        placeholder="Tell how was your stay, what you like and what can be improved"
        maxLength={MAX_TEXT_LENGTH}
        onChange={handleInputChange}
        value={review.comment}
        disabled={isLoading}
      >
      </textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button" type="button"
          disabled={review.rating === 0 || review.comment.length < MIN_TEXT_LENGTH || isLoading}
          onClick={(evt) => onSubmitButtonClick(evt)}
        >Submit
        </button>
      </div>
    </form>
  );
}

