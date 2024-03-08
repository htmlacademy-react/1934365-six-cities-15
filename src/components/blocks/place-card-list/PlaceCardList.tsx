import { PlaceCardPropsType } from '../place-card/types';
import PlaceCard from '../place-card/PlaceCard';

export default function PlaceCardList(props: { places: Array<PlaceCardPropsType>; onCardHover: (placeId: PlaceCardPropsType['id'] | null) => void }): JSX.Element {

  return (
    <>
      {props.places.map((card: PlaceCardPropsType) => (
        <PlaceCard
          key={card.id}
          card={card}
          onCardHover = {props.onCardHover}
        />
      ))}
    </>
  );
}
