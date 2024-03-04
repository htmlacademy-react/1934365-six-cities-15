import { Fragment, ReactEventHandler, useState } from 'react';

type EventHandler = ReactEventHandler<HTMLInputElement | HTMLTextAreaElement>

const rating = [
  { value: 5, label: 'perfect' },
  { value: 4, label: 'good' },
  { value: 3, label: 'not bad' },
  { value: 2, label: 'badly' },
  { value: 1, label: 'terribly' },
];

export default function OfferForm(): JSX.Element {
  const [review, setReview] = useState({ rating: 0, review: '' });
  const onChangeReviewHandler: EventHandler = (evt) => {
    const { name, value } = evt.currentTarget;
    setReview({ ...review, [name]: value });
  };
  return (
    <form className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {rating.map((el) => (
          <Fragment key={el.value}>
            <input
              className="form__rating-input visually-hidden"
              name="rating"
              value={el.value}
              id={`${el.value}-stars`}
              type="radio"
              onChange={onChangeReviewHandler}
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
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        maxLength={300}
        onChange={onChangeReviewHandler}
      >
      </textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button" type="submit"
          disabled={review.rating === 0 || review.review.length < 50}
        >Submit
        </button>
      </div>
    </form>
  );
}
