import Favorites from '../../pages/favorites-page/Favorites';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from '../../pages/main-page/Main';
import Offer from '../../pages/offer-page/Offer';
import { PLACES_AMOUNT } from '../utils/constants';
import { AppRoute } from '../utils/types';
import { AppPropsType } from './types';
import Login from '../../pages/login-page/Login';
import NotFound from '../../pages/not-found-page/NotFound';
import PrivateRoute from '../blocks/private-route/PrivateRoute';
import { HelmetProvider } from 'react-helmet-async';
import Layout from '../layout/layout/Layout';
import { getAuthorizationStatus as getAuthorizationStatus } from '../utils/utils';

export default function App(props: AppPropsType): JSX.Element {
  const authorizationStatus = getAuthorizationStatus();

  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path={AppRoute.Root} element={<Layout />} >
            <Route index element={<Main placesAmount={PLACES_AMOUNT} places = {props.places} cities={props.cities} filters = {props.filters} city ={props.city} />} />
            <Route path={AppRoute.Login} element={
              <PrivateRoute authorizationStatus={authorizationStatus} isReverse>
                <Login />
              </PrivateRoute>
            }
            />
            <Route path={AppRoute.Favorites} element={
              <PrivateRoute authorizationStatus={authorizationStatus}>
                <Favorites favoritePlaces = {props.favoritePlaces} />
              </PrivateRoute>
            }
            />
            <Route path={AppRoute.Offer} element={<Offer />} />
            <Route path='*' element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}
