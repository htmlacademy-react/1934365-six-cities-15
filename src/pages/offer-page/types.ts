import { PlaceCardType } from '../../components/blocks/place-card/types';
import { ReviewType } from '../../components/blocks/review-item/types';

export type OfferPropsType = {
  reviews: Array<ReviewType>;
  offer: PlaceCardType;
}
