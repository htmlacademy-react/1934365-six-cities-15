export default function OfferFeature(props: { feature: string }): JSX.Element {
  return (
    <li className="offer__inside-item">
      {props.feature}
    </li>
  );
}
