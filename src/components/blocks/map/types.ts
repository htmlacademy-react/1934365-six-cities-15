import { CityPropsType, LocationType, PlaceCardPropsType } from '../place-card/types';

export type MapPropsType = {
  city: LocationType;
  places: Array<PlaceCardPropsType>;
  activeCardId?: PlaceCardPropsType['id'] | null;
  activeCity: CityPropsType['name'];
}

