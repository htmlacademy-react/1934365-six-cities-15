import { Navigate } from "react-router-dom";
import { AppRoute, AutorizationStatus } from "../../utils/types";

type PrivateRouteProps = {
  autorizationStatus: AutorizationStatus;
  children: JSX.Element
}

export default function PrivateRoute({autorizationStatus, children}: PrivateRouteProps): JSX.Element {
  return (
    autorizationStatus === AutorizationStatus.Auth
      ? children
      : <Navigate to={AppRoute.Login} />
  )
}
