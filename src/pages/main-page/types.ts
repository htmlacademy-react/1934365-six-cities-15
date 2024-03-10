import { CityPropsType, PlaceCardType } from '../../components/blocks/place-card/types';

export type MainPropsType = {
  placesAmount: number;
  places: Array<PlaceCardType>;
  cities: Array<CityPropsType>;
  filters: string[];
}
