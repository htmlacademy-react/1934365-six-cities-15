import { Navigate } from 'react-router-dom';
import { AppRoute, AutorizationStatus } from '../../utils/types';

type PrivateRouteProps = {
  autorizationStatus: AutorizationStatus;
  isReverse?: boolean;
  children: JSX.Element;
}

export default function PrivateRoute({autorizationStatus,isReverse, children}: PrivateRouteProps): JSX.Element {
  return (
    autorizationStatus === (isReverse ? AutorizationStatus.NoAuth : AutorizationStatus.Auth)
      ? children
      : <Navigate to={isReverse ? AppRoute.Root : AppRoute.Login} />
  );
}
