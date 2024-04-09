import './styles.css';

export default function NotFound(): JSX.Element {
  return (
    <div className="error">
      <div className="error__wrapper">
        <div className="error__image-wrapper">
          <img src="img/not-found-image.png" width="400" height="800" alt="crying girl" />
        </div>
        <div className="error__text-wrapper">
          <p className="error__header">LOOKS LIKE YOU ARE LOST, FRIEND</p>
          <p className="error__text">The page you are looking for can&#8242;t be found</p>
        </div>
      </div>
    </div>
  );
}
