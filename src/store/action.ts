import { createAction } from '@reduxjs/toolkit';
import { CityPropsType } from '../components/blocks/place-card/types';

export const changeCity = createAction<{city: CityPropsType}>('changeCity');

export const getNewOffers = createAction('getNewOffers');
