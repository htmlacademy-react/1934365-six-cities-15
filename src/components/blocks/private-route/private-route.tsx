import { Location, Navigate, useLocation } from 'react-router-dom';
import { AppRoute } from '../../utils/types';
import { useAppSelector } from '../../../store/hooks';
import { userSliceSelectors } from '../../../store/slices/user';

type PrivateRouteProps = {
  onlyForNoAuth?: boolean;
  children: JSX.Element;
}

type FromState = {
  from?: Location;
}

export default function PrivateRoute({ onlyForNoAuth, children }: PrivateRouteProps): JSX.Element {
  const user = useAppSelector(userSliceSelectors.user);
  const location: Location<FromState> = useLocation() as Location<FromState>;

  // если есть авторизация и страница логина
  if (onlyForNoAuth && user) {
    const from = location.state?.from || {pathname: AppRoute.Root};
    return <Navigate to={from} />;
  }

  // // если пользователь неавторизован и не страница логина
  if (!onlyForNoAuth && !user) {
    return <Navigate state={{from: location}} to={AppRoute.Login} />;
  }

  return children;
}
