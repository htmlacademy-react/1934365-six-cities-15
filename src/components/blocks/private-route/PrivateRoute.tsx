import { Navigate } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../utils/types';

type PrivateRouteProps = {
  authorizationStatus: AuthorizationStatus;
  children: JSX.Element;
}

export default function PrivateRoute({ authorizationStatus, children }: PrivateRouteProps): JSX.Element {

  // if (authorizationStatus === AuthorizationStatus.Unknown) {
  //   return <Navigate to={AppRoute.Login} />
  // }

  // if (authorizationStatus === AuthorizationStatus.NoAuth) {
  //   return <Navigate to={AppRoute.Login} />
  // }

  return children;
}
