import { PlaceCardPropsType } from "../../utils/mocks";

import PlaceCard from "../place-card/PlaceCard"

export default function PlaceCardList({ places }: Array<PlaceCardPropsType>): JSX.Element {
  return (
      places.map((el: PlaceCardPropsType) => {
        return (
          <PlaceCard
          className = {el.className}
          key={el.id}
          title = {el.title}
          type = {el.type}
          price = {el.price}
          previewImage = {el.previewImage}
          rating = {el.rating}
          isPremium = {el.isPremium}
          />
        )
      })
  )
}
