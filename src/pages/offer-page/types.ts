import { LocationType, CityPropsType, PlaceCardType } from '../../components/blocks/place-card/types';
import { ReviewType } from '../../components/blocks/review-item/types';

export type OfferPropsType = {
  reviews: Array<ReviewType>;
  nearPlaces: Array<PlaceCardType>;
  city: LocationType;
  activeCardId: PlaceCardType['id'];
  activeCity: CityPropsType['name'];
}
