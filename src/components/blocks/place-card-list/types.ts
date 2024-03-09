import { PlaceCardPropsType, CityPropsType } from '../place-card/types';

export type PlaceCardListPropsType = {
  places: Array<PlaceCardPropsType>;
  onCardHover: (placeId: PlaceCardPropsType['id'] | null) => void;
  activeCity: CityPropsType['name'];
}
