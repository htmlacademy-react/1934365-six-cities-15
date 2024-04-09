import { Fragment, MouseEvent, ReactEventHandler, useState } from 'react';
import { useActionCreators } from '../../../store/hooks';
import { reviewActions } from '../../../store/slices/review';
import { toast } from 'react-toastify';
import { MAX_TEXT_LENGTH, MIN_TEXT_LENGTH } from '../../utils/constants';

type EventHandler = ReactEventHandler<HTMLInputElement | HTMLTextAreaElement>

const RATING = [
  { value: 5, label: 'perfect' },
  { value: 4, label: 'good' },
  { value: 3, label: 'not bad' },
  { value: 2, label: 'badly' },
  { value: 1, label: 'terribly' },
];

export default function OfferForm({ id }: { id: string }): JSX.Element {
  const [review, setReview] = useState({ rating: 0, comment: '' });
  const handleInputChange: EventHandler = (evt) => {
    const { name, value } = evt.currentTarget;
    setReview({ ...review, [name]: value });
  };
  const { postComment } = useActionCreators(reviewActions);

  const onSubmitButtonClick = (evt: MouseEvent) => {
    evt.preventDefault();
    postComment({ body: review, offerId: id })
      .unwrap()
      .then(() => {
        // document.querySelectorAll<HTMLScriptElement>('.form__star-image').forEach((el) => {
        //   el.style.fill = '#c7c7c7';
        // });
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
      >
      </textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button" type="button"
          disabled={review.rating === 0 || review.comment.length < MIN_TEXT_LENGTH}
          onClick={(evt) => onSubmitButtonClick(evt)}
        >Submit
        </button>
      </div>
    </form>
  );
}

