import Favorites from '../../pages/favorites-page/Favorites';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from '../../pages/main-page/Main';
import Offer from '../../pages/offer-page/Offer';
import { PLACES_AMOUNT } from '../utils/constants';
import { AppRoute, AutorizationStatus } from '../utils/types';
import Login from '../../pages/login-page/Login';
import NotFound from '../../pages/not-found-page/NotFound';
import PrivateRoute from '../blocks/private-route/PrivateRoute';
import { HelmetProvider } from 'react-helmet-async';
import Layout from '../layout/layout/Layout';

export default function App(): JSX.Element {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path={AppRoute.Root} element={<Layout />}>
            <Route index element={<Main placesAmount={PLACES_AMOUNT} />} />
            <Route path={AppRoute.Login} element={<Login />} />
            <Route path={AppRoute.Favorites} element={
              <PrivateRoute autorizationStatus={AutorizationStatus.Auth}>
                <Favorites />
              </PrivateRoute>
            } />
            <Route path={AppRoute.Offer} element={<Offer />} />
            <Route path='*' element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}
