import { PlaceCardType } from '../place-card/types';
import FavoriteLocation from '../favorite-location/favorite-location';
import PlaceCard from '../place-card/place-card';
import { IMAGE_HEIGHT, IMAGE_WIDTH } from '../../utils/constants';

export default function FavoritesList({favoritePlaces}: {favoritePlaces: Array<PlaceCardType>}): JSX.Element {
  const cities: string[] = [];
  const offersByCity: Record<string, PlaceCardType[]> = {};

  for (const offer of favoritePlaces) {
    const city = offer.city.name;

    if (city in offersByCity) {
      offersByCity[city].push(offer);
      continue;
    }

    cities.push(city);
    offersByCity[city] = [offer];
    continue;
  }

  return (
    <ul className="favorites__list">
      {cities.map((city) => (
        <li className="favorites__locations-items" key={city}>
          <div className="favorites__locations locations locations--current">
            <FavoriteLocation title={city} />
          </div>
          <div className="favorites__places">
            {offersByCity[city]?.map((card) => (
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
      ))}
    </ul>
  );
}
