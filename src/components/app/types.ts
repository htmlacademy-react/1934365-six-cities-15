import { PlaceCardPropsType, CityPropsType, LocationType } from '../blocks/place-card/types';

export type AppPropsType = {
  places: Array<PlaceCardPropsType>;
  cities: Array<CityPropsType>;
  favoritePlaces: Array<PlaceCardPropsType>;
  filters: string[];
  city: LocationType;
}
