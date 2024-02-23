export default function FavoriteLocation({ title }): JSX.Element {
  return (
    <div className="locations__item">
      <a className="locations__item-link" href="#">
        <span>{title}</span>
      </a>
    </div>
  );
}
