import { Link, useLocation } from 'react-router-dom';
import { AppRoute } from '../../utils/types';
import { useActionCreators, useAppSelector, useAuth, useFavoriteCount } from '../../../store/hooks';
import { userActions, userSliceSelectors } from '../../../store/slices/user';

export default function Header(): JSX.Element {
  const location = useLocation();
  const isAuthorized = useAuth();
  const user = useAppSelector(userSliceSelectors.user);
  const { logout } = useActionCreators(userActions);
  let classNameLink = '';
  const favoriteCount = useFavoriteCount();

  if (location.pathname as AppRoute === AppRoute.Root) {
    classNameLink = 'header__logo-link--active';
  }

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link className={`"header__logo-link ${classNameLink}`} to={AppRoute.Root}>
              <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
            </Link>
          </div>
          {
            location.pathname as AppRoute !== AppRoute.Login ?
              <nav className="header__nav">
                <ul className="header__nav-list">
                  <li className="header__nav-item user">
                    <Link className="header__nav-link header__nav-link--profile" to={AppRoute.Favorites}>
                      <div className="header__avatar-wrapper user__avatar-wrapper">
                      </div>
                      {isAuthorized ?
                        <>
                          <span className="header__user-name user__name">{user?.email}</span>
                          <span className="header__favorite-count">{favoriteCount}</span>
                        </>
                        : <span className="header__login">Sign in</span>}
                    </Link>
                  </li>
                  {
                    isAuthorized ?
                      <li className="header__nav-item">
                        <Link className="header__nav-link"
                          to="#"
                          onClick={() => logout()}
                        >
                          <span className="header__signout">Sign out</span>
                        </Link>
                      </li>
                      : null
                  }
                </ul>
              </nav>
              : null
          }
        </div>
      </div>
    </header>
  );
}
