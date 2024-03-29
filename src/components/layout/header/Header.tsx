import { Link, useLocation } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../utils/types';
import { getAuthorizationStatus } from '../../utils/utils';

export default function Header(): JSX.Element {
  const location = useLocation();
  const authorizationStatus = getAuthorizationStatus();
  let classNameLink = '';
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
                      {authorizationStatus === AuthorizationStatus.Auth ?
                        <>
                          <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                          <span className="header__favorite-count">3</span>
                        </>
                        : <span className="header__login">Sign in</span>}
                    </Link>
                  </li>
                  {
                    authorizationStatus === AuthorizationStatus.Auth ?
                      <li className="header__nav-item">
                        <a className="header__nav-link" href="#">
                          <span className="header__signout">Sign out</span>
                        </a>
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
