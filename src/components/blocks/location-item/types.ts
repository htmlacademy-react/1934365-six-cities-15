import { CityPropsType } from '../place-card/types';

export type LocationItemPropsType = {
  city: CityPropsType;
  onCityItemClick: (name: string) => void;
  activeCityName: CityPropsType['name'];
}
