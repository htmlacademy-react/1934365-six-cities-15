import { Helmet } from 'react-helmet-async';
import FavoritesList from '../../components/blocks/favorites-list/favorites-list';
import { useAppSelector } from '../../store/hooks';
import { favoriteSelectors } from '../../store/slices/favorites';
import FavoritesEmpty from '../favorites-empty/favorites-empty';

export default function FavoritesPage(): JSX.Element {
  const favoritePlaces = useAppSelector(favoriteSelectors.favorites);
  const hasFavorites = favoritePlaces.length > 0;
  return (
    <div className="page">
      <Helmet>
        <title>Избранное</title>
      </Helmet>
      {hasFavorites ?
        <main className="page__main page__main--favorites">
          <div className="page__favorites-container container">
            <section className="favorites">
              <h1 className="favorites__title">Saved listing</h1>
              <FavoritesList favoritePlaces={favoritePlaces} />
            </section>
          </div>
        </main>
        : <FavoritesEmpty />}
    </div>
  );
}
