import { Link } from 'react-router-dom';
import { PlaceCardPropsType } from './types';
import { getRatingStatus } from '../../utils/utils';
import FavoriteButton from '../../ui/button/favorite-button';

export default function PlaceCard({ card, onCardHover, className, width, height}: PlaceCardPropsType): JSX.Element {
  const handleMouseEnter = (): void => {
    onCardHover?.(card.id);
  };

  const handleMouseLeave = (): void => {
    onCardHover?.(null);
  };

  const cardTypeWithUpperCase = card.type[0].toUpperCase() + card.type.slice(1);

  return (
    <article className={`${className}__card place-card`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} >
      {card.isPremium ? <div className="place-card__mark"><span>Premium</span></div> : ''}
      <div className={`${className}__image-wrapper place-card__image-wrapper`}>
        <Link to={`/offers/${card.id}`}>
          <img className="place-card__image" src={card.previewImage} width={width} height={height} alt="Place image" />
        </Link>
      </div>
      <div className={`${className}__card-info place-card__info`}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{card.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <FavoriteButton isFavorite={card.isFavorite} offerId={card.id} />
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${getRatingStatus(card.rating)}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`/offers/${card.id}`}>{card.title}</Link>
        </h2>
        <p className="place-card__type">{cardTypeWithUpperCase}</p>
      </div>
    </article>
  );
}


