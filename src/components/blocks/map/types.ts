import { CityPropsType, LocationType, PlaceCardType } from '../place-card/types';

export type MapPropsType = {
  city: LocationType;
  places: Array<PlaceCardType>;
  activeCardId?: PlaceCardType['id'] | null;
  activeCity: CityPropsType['name'];
  className?: string;
}

