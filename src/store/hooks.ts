import { ActionCreatorsMapObject, bindActionCreators } from '@reduxjs/toolkit';
import { useEffect, useMemo } from 'react';
import { State } from './store';
import { useDispatch, TypedUseSelectorHook, useSelector } from 'react-redux';
import { AppDispatch } from './store';
import { userSliceSelectors } from './slices/user';
import { AuthorizationStatus, RequestStatus } from '../components/utils/types';
import { favoriteActions, favoriteSelectors } from './slices/favorites';

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<State> = useSelector;

export const useActionCreators = <Actions extends ActionCreatorsMapObject>(actions: Actions) => {
  const dispatch = useAppDispatch();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  return useMemo(() => bindActionCreators(actions, dispatch), []);
};

export const useAuth = () => {
  const userStatus = useAppSelector(userSliceSelectors.userStatus);
  return userStatus === AuthorizationStatus.Auth;
};

export const useFavoriteCount = () => {
  const status = useAppSelector(favoriteSelectors.favoriteStatus);
  const count = useAppSelector(favoriteSelectors.favorites).length;
  const { fetchFavorites } = useActionCreators(favoriteActions);

  useEffect(() => {
    if (status === RequestStatus.Idle) {
      fetchFavorites();
    }
  }, [status, fetchFavorites]);

  return count;
};
