import { CityPropsType } from '../../blocks/place-card/types';

export default function Location(props: {cities: Array<CityPropsType>}): JSX.Element {
  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {props.cities.map((el) => (
          <li
            key = {el.name}
            className="locations__item"
          >
            <a className="locations__item-link tabs__item" href="#">
              <span>{el.name}</span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
