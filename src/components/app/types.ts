import { CityPropsType, PlaceCardType } from '../blocks/place-card/types';
import { ReviewType } from '../blocks/review-item/types';

export type AppPropsType = {
  places: Array<PlaceCardType>;
  cities: Array<CityPropsType>;
  favoritePlaces: Array<PlaceCardType>;
  reviews: Array<ReviewType>;
  offer: PlaceCardType;
}
