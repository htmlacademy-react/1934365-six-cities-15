import { Outlet, useLocation } from 'react-router-dom';
import { AppRoute } from '../../utils/types.ts';
import Header from '../header/header.tsx';
import Footer from '../footer/footer.tsx';

export default function Layout(): JSX.Element {
  const location = useLocation();
  let classNamePage = '';
  if (location.pathname as AppRoute === AppRoute.Root) {
    classNamePage = 'page--gray page--main';
  } else if (location.pathname as AppRoute === AppRoute.Login) {
    classNamePage = 'page--gray page--login';
  }

  return (
    <div className={`page ${classNamePage}`}>
      <Header />
      <Outlet />
      {location.pathname as AppRoute === AppRoute.Favorites ? <Footer /> : null}
    </div>
  );
}
