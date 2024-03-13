import { NEAR_PLACES_AMOUNT } from '../../components/utils/constants';
import { places, offer } from '../../components/utils/mocks';

export const nearPlaces = places.filter((place) => {
  if (place.id !== offer.id && offer.city.name === place.city.name) {
    return true;
  }
}).slice(0, NEAR_PLACES_AMOUNT);
