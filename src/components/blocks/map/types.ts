import { CityPropsType, PlaceCardType } from '../place-card/types';

export type MapPropsType = {
  city: CityPropsType;
  places: Array<PlaceCardType> | null;
  activeCardId?: PlaceCardType['id'] | null;
  activeCityName: CityPropsType['name'];
  className?: string;
}

