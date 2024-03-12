import { PlaceCardType } from '../../components/blocks/place-card/types';
import { ReviewType } from '../../components/blocks/review-item/types';

export type OfferPropsType = {
  reviews: Array<ReviewType>;
  places: Array<PlaceCardType>;
  offer: OfferType;
}

export type OfferType = Omit<PlaceCardType, 'previewImage'> & {
  description: string;
  bedrooms: number;
  goods: [string];
  host: {
    name: string;
    avatarUrl: string;
    isPro: boolean;
  };
  images: [string];
  maxAdults: number;
}
