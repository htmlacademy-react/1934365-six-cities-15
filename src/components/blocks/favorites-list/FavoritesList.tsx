import { PlaceCardPropsType } from '../../blocks/place-card/types';
import FavoriteLocation from '../favorite-location/FavoriteLocation';
import PlaceCard from '../place-card/PlaceCard';

export default function FavoritesList(props: { favoritePlaces: Array<PlaceCardPropsType> }): JSX.Element {
  return (
    <ul className="favorites__list">
      <li className="favorites__locations-items">
        <div className="favorites__locations locations locations--current">
          <FavoriteLocation title='Paris' />
        </div>
        <div className="favorites__places">
          {props.favoritePlaces.map((card) => (
            <PlaceCard
              key={card.id}
              card={card}
            />
          ))}
        </div>
      </li>

      <li className="favorites__locations-items">
        <div className="favorites__locations locations locations--current">
          <FavoriteLocation title='Cologne' />
        </div>
        <div className="favorites__places">
          {props.favoritePlaces.map((card) => (
            <PlaceCard
              key={card.id}
              card={card}
            />
          ))}
        </div>
      </li>
    </ul>
  );
}
