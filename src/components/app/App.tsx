import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppRoute } from '../utils/types';
import { AppPropsType } from './types';
import NotFound from '../../pages/not-found-page/NotFound';
import PrivateRoute from '../blocks/private-route/PrivateRoute';
import { HelmetProvider } from 'react-helmet-async';
import Layout from '../layout/layout/Layout';
import OfferPage from '../../pages/offer-page/OfferPage';
import FavoritesPage from '../../pages/favorites-page/FavoritesPage';
import MainPage from '../../pages/main-page/MainPage';
import { useActionCreators, useAppSelector } from '../../store/hooks';
import { useEffect } from 'react';
import { offersActions } from '../../store/slices/offers';
import { userActions, userSliceSelectors } from '../../store/slices/user';
import { getToken } from '../../services/token';
import LoginPage from '../../pages/login-page/LoginPage';

export default function App({ places, cities, favoritePlaces }: AppPropsType): JSX.Element {
  const { fetchAllOffers } = useActionCreators(offersActions)
  const { checkAuth } = useActionCreators(userActions)
  const userStatus = useAppSelector(userSliceSelectors.userStatus)

  useEffect(() => {
    fetchAllOffers()
  }, [])
  const token = getToken();
  useEffect(() => {
    if (token) {
      checkAuth()
    }
  }, [token, checkAuth])

  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path={AppRoute.Root} element={<Layout />} >
            <Route index element={<MainPage places={places} cities={cities} />} />
            <Route path={AppRoute.Login} element={
              <PrivateRoute authorizationStatus={userStatus}>
                <LoginPage />
              </PrivateRoute>
            }
            />
            <Route path={AppRoute.Favorites} element={
              <PrivateRoute authorizationStatus={userStatus}>
                <FavoritesPage favoritePlaces={favoritePlaces} />
              </PrivateRoute>
            }
            />
            <Route path={AppRoute.Offer} element={<OfferPage />} />
            <Route path='*' element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}
