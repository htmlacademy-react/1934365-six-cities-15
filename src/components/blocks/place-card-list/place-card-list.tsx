import { PlaceCardType } from '../place-card/types';
import PlaceCard from '../place-card/place-card';
import { PlaceCardListPropsType } from './types';
import { IMAGE_WIDTH, IMAGE_HEIGHT } from '../../utils/constants';

export default function PlaceCardList({ places, onCardHover, activeCityName }: PlaceCardListPropsType): JSX.Element {

  return (
    <>
      {
        places.map((card: PlaceCardType) => (
          (card.city.name === activeCityName) ?
            <PlaceCard
              key={card.id}
              card={card}
              onCardHover={onCardHover}
              className='cities'
              width={IMAGE_WIDTH.large}
              height={IMAGE_HEIGHT.large}
            /> : null
        ))
      }
    </>
  );
}
