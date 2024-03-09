import { CityPropsType } from "../place-card/types";

export type LocationListPropsType = {
  cities: Array<CityPropsType>;
  onCityItemClick: (name: string) => void;
  activeCity: CityPropsType['name']
}
