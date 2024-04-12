import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppRoute, RequestStatus } from '../utils/types';
import { AppPropsType } from './types';
import NotFound from '../../pages/not-found-page/not-found';
import PrivateRoute from '../blocks/private-route/private-route';
import { HelmetProvider } from 'react-helmet-async';
import Layout from '../layout/layout/layout.tsx';
import OfferPage from '../../pages/offer-page/offer-page';
import FavoritesPage from '../../pages/favorites-page/favorites-page';
import MainPage from '../../pages/main-page/main-page';
import { useActionCreators, useAppSelector } from '../../store/hooks';
import { useEffect } from 'react';
import { offersActions } from '../../store/slices/offers';
import { userActions, userSliceSelectors } from '../../store/slices/user';
import { getToken } from '../../services/token';
import LoginPage from '../../pages/login-page/login-page';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from '../ui/loader/loader';

export default function App({ cities }: AppPropsType): JSX.Element {
  const { fetchAllOffers } = useActionCreators(offersActions);
  const { checkAuth } = useActionCreators(userActions);
  const requestStatus = useAppSelector(userSliceSelectors.userRequestStatus);

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

  if (requestStatus === RequestStatus.Loading) {
    return (
      <Loader />
    );
  }

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
