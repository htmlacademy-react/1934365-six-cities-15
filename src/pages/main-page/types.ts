import { CityPropsType, LocationType, PlaceCardPropsType } from '../../components/blocks/place-card/types';

export type MainPropsType = {
  placesAmount: number;
  places: Array<PlaceCardPropsType>;
  cities: Array<CityPropsType>;
  filters: string[];
  city: LocationType;
}
