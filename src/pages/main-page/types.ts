import { CityPropsType, PlaceCardType } from '../../components/blocks/place-card/types';

export type MainPropsType = {
  places: Array<PlaceCardType>;
  cities: Array<CityPropsType>;
  filters: string[];
}
