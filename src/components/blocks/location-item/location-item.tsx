import classNames from 'classnames';
import { LocationItemPropsType } from './types';

export default function LocationItem({ city, onCityItemClick, activeCityName }: LocationItemPropsType): JSX.Element {
  const handleClick = () => {
    onCityItemClick(city.name);
  };
  return (
    < li
      className="locations__item"
      onClick={handleClick}
    >
      <a className={classNames('locations__item-link tabs__item',
        { 'tabs__item--active': activeCityName === city.name }
      )}
      href="#"
      >
        <span>{city.name}</span>
      </a>
    </li >
  );
}
