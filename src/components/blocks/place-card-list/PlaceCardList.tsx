import { PlaceCardPropsType } from '../../utils/mocks';

import PlaceCard from '../place-card/PlaceCard';

export default function PlaceCardList(props: { places: Array<PlaceCardPropsType> }): JSX.Element {
  return (
    <>
      {props.places.map((card: PlaceCardPropsType) => (
        <PlaceCard
          key = {card.id}
          card = {card}
        />
      ))}
    </>
  );
}
