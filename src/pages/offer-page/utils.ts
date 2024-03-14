import { MAX_REVIEW_ITEMS_AMOUNT, NEAR_PLACES_AMOUNT } from '../../components/utils/constants';
import { places, offer, reviews } from '../../components/utils/mocks';

export const nearPlaces = places.filter((place) => {
  if (place.id !== offer.id && offer.city.name === place.city.name) {
    return true;
  }
}).slice(0, NEAR_PLACES_AMOUNT);

export const reviewsList = reviews.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  .slice(0, MAX_REVIEW_ITEMS_AMOUNT);
