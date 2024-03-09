import LocationItem from '../location-item/LocationItem';
import { LocationListPropsType } from './types';

export default function Location({cities, onCityItemClick, activeCity }: LocationListPropsType): JSX.Element {
  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {cities.map((city) => (
          <LocationItem
            key={city.name}
            city={city}
            onCityItemClick = {onCityItemClick}
            activeCity = {activeCity}/>
        ))}
      </ul>
    </section>
  );
}
