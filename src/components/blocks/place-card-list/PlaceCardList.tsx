import { CityPropsType, PlaceCardPropsType } from '../place-card/types';
import PlaceCard from '../place-card/PlaceCard';

export default function PlaceCardList(props: { places: Array<PlaceCardPropsType>; onCardHover: (placeId: PlaceCardPropsType['id'] | null) => void; activeCity: CityPropsType['name'] }): JSX.Element {

  return (
    <>
      {
        props.places.map((card: PlaceCardPropsType) => (
          (card.city.name === props.activeCity) ?
          <PlaceCard
            key={card.id}
            card={card}
            onCardHover={props.onCardHover}
          /> : null
        ))
      }
    </>
  );
}
