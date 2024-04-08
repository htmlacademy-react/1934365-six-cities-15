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
import { useActionCreators } from '../../store/hooks';
import { useEffect } from 'react';
import { offersActions } from '../../store/slices/offers';
import { userActions } from '../../store/slices/user';
import { getToken } from '../../services/token';
import LoginPage from '../../pages/login-page/LoginPage';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function App({ cities }: AppPropsType): JSX.Element {
  const { fetchAllOffers } = useActionCreators(offersActions);
  const { checkAuth } = useActionCreators(userActions);

  useEffect(() => {
    fetchAllOffers()
      .unwrap()
      .then(() => {})
      .catch(() => {
        toast.error('Server error');
      }
      );
  }, []);

  const token = getToken();
  useEffect(() => {
    if (token) {
      checkAuth();
    }
  }, [token, checkAuth]);

  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path={AppRoute.Root} element={<Layout />} >
            <Route index element={<MainPage cities={cities} />} />
            <Route path={AppRoute.Login} element={
              <PrivateRoute onlyForNoAuth>
                <LoginPage />
              </PrivateRoute>
            }
            />
            <Route path={AppRoute.Favorites} element={
              <PrivateRoute>
                <FavoritesPage />
              </PrivateRoute>
            }
            />
            <Route path={AppRoute.Offer} element={<OfferPage />} />
            <Route path='*' element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <ToastContainer/>
    </HelmetProvider>
  );
}
