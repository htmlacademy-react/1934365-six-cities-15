import { PlaceCardPropsType } from '../../utils/types';
import PlaceCard from '../place-card/PlaceCard';

export default function PlaceCardList(props: { places: Array<PlaceCardPropsType>; onCardHover: (evt: any) => void }): JSX.Element {

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
