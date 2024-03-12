import { OfferType } from '../../../pages/offer-page/types';
import { CityPropsType, PlaceCardType } from '../place-card/types';

export type MapPropsType = {
  city: CityPropsType;
  places: Array<PlaceCardType & OfferType>;
  activeCardId?: PlaceCardType['id'] | null;
  activeCityName: CityPropsType['name'];
  className?: string;
}

