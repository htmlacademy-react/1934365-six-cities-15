import { Helmet } from 'react-helmet-async';
import FavoritesList from '../../components/blocks/favorites-list/FavoritesList';
import { PlaceCardPropsType } from '../../components/utils/mocks';

export default function Favorites(props: {favoritePlaces: Array<PlaceCardPropsType>}): JSX.Element {
  return (
    <div className="page">
      <Helmet>
        <title>Избранное</title>
      </Helmet>
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <FavoritesList favoritePlaces = {props.favoritePlaces} />
          </section>
        </div>
      </main>
    </div>
  );
}
