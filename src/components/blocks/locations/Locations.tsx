export const cities = [
  { id: 1, title: 'Paris' },
  { id: 2, title: 'Cologne' },
  { id: 3, title: 'Brussels' },
  { id: 4, title: 'Amsterdam' },
  { id: 5, title: 'Hamburg' },
  { id: 6, title: 'Dusseldorf' },
]

export default function Location(): JSX.Element {
  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {cities.map((el) => {
          return (
            <li
              key = {el.id}
              className="locations__item">
              <a className="locations__item-link tabs__item" href="#">
                <span>{el.title}</span>
              </a>
            </li>
          )
        })}
      </ul>
    </section>
  )
}
