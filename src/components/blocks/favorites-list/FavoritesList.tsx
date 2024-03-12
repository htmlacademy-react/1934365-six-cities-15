import { PlaceCardType } from '../../blocks/place-card/types';
import FavoriteLocation from '../favorite-location/FavoriteLocation';
import PlaceCard from '../place-card/PlaceCard';
import { IMAGE_HEIGHT, IMAGE_WIDTH } from '../../utils/constants';

export default function FavoritesList(props: { favoritePlaces: Array<PlaceCardType> }): JSX.Element {
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
              className='favorites'
              width={IMAGE_WIDTH.small}
              height={IMAGE_HEIGHT.small}
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
              className='favorites'
              width={IMAGE_WIDTH.small}
              height={IMAGE_HEIGHT.small}
            />
          ))}
        </div>
      </li>
    </ul>
  );
}
