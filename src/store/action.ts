import { createAction } from '@reduxjs/toolkit';
import { CityPropsType } from '../components/blocks/place-card/types';

export const enum ActionType {
  ChangeCity = 'changeCity'
}

export const changeCity = (city: CityPropsType) => ({
  payload: city,
  type: ActionType.ChangeCity
})

export const getNewOffers = createAction('getNewOffers');
