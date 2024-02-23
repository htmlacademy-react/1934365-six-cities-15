import { IMAGE_HEIGHT, IMAGE_WIDTH } from "../../utils/constants";
import { PlaceCardPropsType } from "../../utils/mocks";
import FavoriteLocation from "../favorite-location/FavoriteLocation";
import PlaceCard from "../place-card/PlaceCard";

export default function FavoritesList( {favoritePlaces}: Array<PlaceCardPropsType>): JSX.Element {
  console.log(favoritePlaces[0].className)
  return (
    <ul className="favorites__list">
      <li className="favorites__locations-items">
        <div className="favorites__locations locations locations--current">
          <FavoriteLocation title='Paris' />
        </div>
        <div className="favorites__places">
          {favoritePlaces.map(el => {
            return (
              <PlaceCard
              className={el.className}
              key={el.id}
              title={el.title}
              type={el.type}
              price={el.price}
              previewImage={el.previewImage}
              rating={el.rating}
              isPremium={el.isPremium}
              width = {IMAGE_WIDTH.small}
              height = {IMAGE_HEIGHT.small}
            />
            )
          })}
        </div>
      </li>

      <li className="favorites__locations-items">
        <div className="favorites__locations locations locations--current">
          <FavoriteLocation title='Cologne' />
        </div>
        <div className="favorites__places">
        {favoritePlaces.map(el => {
            return (
              <PlaceCard
              className={el.className}
              key={el.id}
              title={el.title}
              type={el.type}
              price={el.price}
              previewImage={el.previewImage}
              rating={el.rating}
              isPremium={el.isPremium}
              width = {IMAGE_WIDTH.small}
              height = {IMAGE_HEIGHT.small}
            />
            )
          })}
        </div>
      </li>
    </ul>
  )
}
