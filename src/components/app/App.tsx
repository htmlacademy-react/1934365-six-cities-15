import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppRoute, RequestStatus } from '../utils/types.ts';
import { AppPropsType } from './types.ts';
import NotFound from '../../pages/not-found-page/not-found.tsx';
import PrivateRoute from '../blocks/private-route/private-route.tsx';
import { HelmetProvider } from 'react-helmet-async';
import Layout from '../layout/layout/layout.tsx';
import OfferPage from '../../pages/offer-page/offer-page.tsx';
import FavoritesPage from '../../pages/favorites-page/favorites-page.tsx';
import MainPage from '../../pages/main-page/main-page.tsx';
import { useActionCreators, useAppSelector } from '../../store/hooks.ts';
import { useEffect } from 'react';
import { offersActions } from '../../store/slices/offers.ts';
import { userActions, userSliceSelectors } from '../../store/slices/user.ts';
import { getToken } from '../../services/token.ts';
import LoginPage from '../../pages/login-page/login-page.tsx';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from '../ui/loader/loader.tsx';

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
