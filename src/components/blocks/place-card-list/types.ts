import { CityPropsType, PlaceCardType } from '../place-card/types';

export type PlaceCardListPropsType = {
  places: Array<PlaceCardType>;
  onCardHover: (placeId: PlaceCardType['id'] | null) => void;
  activeCityName: CityPropsType['name'];
}
