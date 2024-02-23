import FavoritesList from '../../components/blocks/favorites-list/FavoritesList';
import Footer from '../../components/layout/footer/Footer';
import Header from '../../components/layout/header/Header';
import { favoritePlaces } from '../../components/utils/mocks';

export default function Favorites(): JSX.Element {
  return (
    <div className="page">
      <Header />
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <FavoritesList favoritePlaces = {favoritePlaces} />
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
