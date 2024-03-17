import { CitiesList, CityPropsType } from '../place-card/types';

export type LocationItemPropsType = {
  city: CityPropsType;
  onCityItemClick: (name: CitiesList) => void;
  activeCityName: CityPropsType['name'];
}
