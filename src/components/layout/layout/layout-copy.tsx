import { Outlet, useLocation } from 'react-router-dom';
import { AppRoute } from '../../utils/types';
import FooterCopy from '../footer/footer-copy.tsx';
import HeaderCopy from '../header/header-copy.tsx';

export default function LayoutCopy(): JSX.Element {
  const location = useLocation();
  let classNamePage = '';
  if (location.pathname as AppRoute === AppRoute.Root) {
    classNamePage = 'page--gray page--main';
  } else if (location.pathname as AppRoute === AppRoute.Login) {
    classNamePage = 'page--gray page--login';
  }

  return (
    <div className={`page ${classNamePage}`}>
      <HeaderCopy />
      <Outlet />
      {location.pathname as AppRoute === AppRoute.Favorites ? <FooterCopy /> : null}
    </div>
  );
}
