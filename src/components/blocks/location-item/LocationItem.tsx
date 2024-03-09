import { CityPropsType } from '../place-card/types';
import classNames from 'classnames';

export default function LocationItem({ city, onCityItemClick, activeCity }: { city: CityPropsType; onCityItemClick: (name: string) => void; activeCity: CityPropsType['name'] }): JSX.Element {
  const handleClick = () => {
    onCityItemClick(city.name);
  };
  return (
    < li
      className="locations__item"
      onClick={handleClick}
    >
      <a className={classNames('locations__item-link tabs__item',
        { 'tabs__item--active': activeCity === city.name }
      )}
      href="#"
      >
        <span>{city.name}</span>
      </a>
    </li >

  );
}
