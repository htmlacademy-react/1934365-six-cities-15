import { AuthorizationStatus } from './types';

export const getAuthorizationStatus = () => AuthorizationStatus.Auth;

export const getRatingStatus = (rating: number) => Math.round(rating) * 20;
