import { useEffect, useState } from 'react';
import { PlaceCardPropsType, places } from '../../utils/mocks';
import PlaceCard from '../place-card/PlaceCard';
import { Nullable } from 'vitest';

export default function PlaceCardList(props: { places: Array<PlaceCardPropsType> }): JSX.Element {
  const [activeCard, setActiveCard] = useState<Nullable<PlaceCardPropsType>>(null);
  const onCardHover = (card?: PlaceCardPropsType) => {
    setActiveCard(card || null)
  }

  useEffect(() => {
    console.log('component did update')
  }, [places])

  useEffect(() => {
    console.warn(activeCard)
    return () => {
      console.log('component will unmount')
    }
  }, [])
  return (
    <>
      {props.places.map((card: PlaceCardPropsType) => (
        <PlaceCard
          key = {card.id}
          card = {card}
          onCardHover = {onCardHover}
        />
      ))}
    </>
  );
}
