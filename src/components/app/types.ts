import { CityPropsType, PlaceCardType } from '../blocks/place-card/types';

export type AppPropsType = {
  cities: Array<CityPropsType>;
  favoritePlaces: Array<PlaceCardType>;
}
