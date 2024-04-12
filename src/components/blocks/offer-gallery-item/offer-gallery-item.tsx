export default function OfferGalleryItem(props: {image: string}): JSX.Element {

  return (
    <div className="offer__image-wrapper">
      <img className="offer__image" src={props.image} alt="Photo studio" />
    </div>
  );
}
