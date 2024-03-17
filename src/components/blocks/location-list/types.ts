import { CitiesList, CityPropsType } from '../place-card/types';

export type LocationListPropsType = {
  cities: Array<CityPropsType>;
  onCityItemClick: (name: CitiesList) => void;
  activeCityName: CityPropsType['name'];
}
