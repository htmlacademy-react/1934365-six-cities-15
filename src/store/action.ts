import { createAction } from '@reduxjs/toolkit';
import { CityPropsType } from '../components/blocks/place-card/types';

export const changeCity = createAction<{name: CityPropsType['name']}>('CITY/CHANGE_CITY');

export const getNewOffers = createAction('OFFERS/GET_NEW_OFFERS');
