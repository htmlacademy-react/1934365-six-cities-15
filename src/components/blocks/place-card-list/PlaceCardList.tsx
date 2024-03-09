import { PlaceCardPropsType } from '../place-card/types';
import PlaceCard from '../place-card/PlaceCard';
import { PlaceCardListPropsType } from './types';

export default function PlaceCardList({ places, onCardHover, activeCity }: PlaceCardListPropsType): JSX.Element {

  return (
    <>
      {
        places.map((card: PlaceCardPropsType) => (
          (card.city.name === activeCity) ?
            <PlaceCard
              key={card.id}
              card={card}
              onCardHover={onCardHover}
            /> : null
        ))
      }
    </>
  );
}
