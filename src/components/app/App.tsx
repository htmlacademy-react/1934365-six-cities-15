import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppRoute } from '../utils/types';
import { AppPropsType } from './types';
import NotFound from '../../pages/not-found-page/NotFound';
import PrivateRoute from '../blocks/private-route/PrivateRoute';
import { HelmetProvider } from 'react-helmet-async';
import Layout from '../layout/layout/Layout';
import { getAuthorizationStatus as getAuthorizationStatus } from '../utils/utils';
import OfferPage from '../../pages/offer-page/OfferPage';
import FavoritesPage from '../../pages/favorites-page/FavoritesPage';
import LoginPage from '../../pages/login-page/LoginPage';
import MainPage from '../../pages/main-page/MainPage';
import { useAppDispatch } from '../../store/hooks';
import { useEffect } from 'react';
import { fetchAllOffers } from '../../store/thunks/offers';

export default function App({places, cities, favoritePlaces, reviews, offer}: AppPropsType): JSX.Element {
  const authorizationStatus = getAuthorizationStatus();
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(fetchAllOffers)
  }, [])

  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path={AppRoute.Root} element={<Layout />} >
            <Route index element={<MainPage places = {places} cities={cities} />} />
            <Route path={AppRoute.Login} element={
              <PrivateRoute authorizationStatus={authorizationStatus} isReverse>
                <LoginPage />
              </PrivateRoute>
            }
            />
            <Route path={AppRoute.Favorites} element={
              <PrivateRoute authorizationStatus={authorizationStatus}>
                <FavoritesPage favoritePlaces = {favoritePlaces} />
              </PrivateRoute>
            }
            />
            <Route path={AppRoute.Offer} element={<OfferPage offer={offer} reviews={reviews} />} />
            <Route path='*' element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}
