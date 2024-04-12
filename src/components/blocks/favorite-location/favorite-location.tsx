export default function FavoriteLocation(props: { title: string }): JSX.Element {
  return (
    <div className="locations__item">
      <a className="locations__item-link" href="#">
        <span>{props.title}</span>
      </a>
    </div>
  );
}
