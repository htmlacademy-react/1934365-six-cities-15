import { Helmet } from 'react-helmet-async';
import OfferGalleryItem from '../../components/blocks/offer-gallery-item/OfferGalleryItem';
import PlaceCard from '../../components/blocks/place-card/PlaceCard';
import { favoritePlaceImages } from '../../components/utils/mocks';
import { AuthorizationStatus } from '../../components/utils/types';
import { getAuthorizationStatus, getRatingStatus } from '../../components/utils/utils';
import ReviewsList from '../../components/blocks/reviews-list/ReviewsList';
import Map from '../../components/blocks/map/Map';
import { OfferPropsType } from './types';
import { IMAGE_WIDTH, IMAGE_HEIGHT } from '../../components/utils/constants';
import classNames from 'classnames';
import { nearPlaces, reviewsList } from './utils';

export default function OfferPage({ offer }: OfferPropsType): JSX.Element {
  const authorizationStatus = getAuthorizationStatus();
  const nearPlacesPlusCurrent = [...nearPlaces, offer];
  const activeCardId = offer.id;

  return (
    <div className="page">
      <Helmet>
        <title>Предложение по аренде жилья</title>
      </Helmet>

      <main className="page__main page__main--offer">
        <section className="offer">
          <div className="offer__gallery-container container">
            <div className="offer__gallery">
              {favoritePlaceImages.map((image) => (
                <OfferGalleryItem key={image} image={image} />
              ))}
            </div>
          </div>
          <div className="offer__container container">
            <div className="offer__wrapper">
              <div className="offer__mark">
                <span>Premium</span>
              </div>
              <div className="offer__name-wrapper">
                <h1 className="offer__name">
                  {offer.title}
                </h1>
                <button className="offer__bookmark-button button" type="button">
                  <svg className="offer__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="offer__rating rating">
                <div className="offer__stars rating__stars">
                  <span style={{ width: `${getRatingStatus(offer.rating)}%` }}></span>
                  <span className="visually-hidden">{offer.rating}</span>
                </div>
                <span className="offer__rating-value rating__value">{offer.rating}</span>
              </div>
              <ul className="offer__features">
                <li className="offer__feature offer__feature--entire">
                  {offer.type}
                </li>
                <li className="offer__feature offer__feature--bedrooms">
                  {offer.bedrooms !== undefined && offer.bedrooms > 1 ? `${offer.bedrooms} Bedrooms` : `${offer.bedrooms} Bedroom`}
                </li>
                <li className="offer__feature offer__feature--adults">
                  {offer.maxAdults !== undefined && offer.maxAdults > 1 ? `Max ${offer.maxAdults} adults` : `Max ${offer.maxAdults} adult`}
                </li>
              </ul>
              <div className="offer__price">
                <b className="offer__price-value">&euro;{offer.price}</b>
                <span className="offer__price-text">&nbsp;night</span>
              </div>
              <div className="offer__inside">
                <h2 className="offer__inside-title">What&apos;s inside</h2>
                <ul className="offer__inside-list">
                  {
                    offer.goods?.map((good) => (
                      <li className="offer__inside-item" key={good}>
                        {good}
                      </li>
                    ))
                  }
                </ul>
              </div>
              <div className="offer__host">
                <h2 className="offer__host-title">Meet the host</h2>
                <div className="offer__host-user user">
                  <div className={classNames(
                    'offer__avatar-wrapper user__avatar-wrapper',
                    { 'offer__avatar-wrapper--pro': offer.host?.isPro === true }
                  )}
                  >
                    <img className="offer__avatar user__avatar" src={offer.host?.avatarUrl} width="74" height="74" alt="Host avatar" />
                  </div>
                  <span className="offer__user-name">
                    {offer.host?.name}
                  </span>
                  {offer.host?.isPro ? <span className="offer__user-status">Pro</span> : null}
                </div>
                <div className="offer__description">
                  <p className="offer__text">
                    {offer.description}
                  </p>
                  {/* <p className="offer__text">
                    An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.
                  </p> */}
                </div>
              </div>
              <section className="offer__reviews reviews">
                <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviewsList.length}</span></h2>
                <ReviewsList isAuth={authorizationStatus === AuthorizationStatus.Auth} reviews={reviewsList} />
              </section>
            </div>
          </div>
          <Map
            city={offer.city}
            places={nearPlacesPlusCurrent}
            activeCityName={offer.city.name}
            activeCardId={activeCardId}
            className='offer__map' />
        </section>

        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighborhood</h2>
            <div className="near-places__list places__list">
              {
                nearPlaces.map((card) => (
                  <PlaceCard
                    key={card.id}
                    card={card}
                    className={'near-places'}
                    width={IMAGE_WIDTH.large}
                    height={IMAGE_HEIGHT.large}
                  />
                ))
              }
            </div>
          </section>
        </div>
      </main >
    </div >
  );
}
