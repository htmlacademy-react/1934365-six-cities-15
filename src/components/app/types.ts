import { CityPropsType, LocationType, PlaceCardType } from '../blocks/place-card/types';
import { ReviewType } from '../blocks/review-item/types';

export type AppPropsType = {
  places: Array<PlaceCardType>;
  nearPlaces: Array<PlaceCardType>;
  cities: Array<CityPropsType>;
  favoritePlaces: Array<PlaceCardType>;
  filters: string[];
  city: LocationType;
  reviews: Array<ReviewType>;
}
