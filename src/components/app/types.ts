import { CityPropsType, PlaceCardType } from '../blocks/place-card/types';

export type AppPropsType = {
  places: Array<PlaceCardType>;
  cities: Array<CityPropsType>;
  favoritePlaces: Array<PlaceCardType>;
}
