import { createReducer } from '@reduxjs/toolkit';
import { changeCity } from './action';
import { cities, places } from '../components/utils/mocks';
import { CityPropsType, PlaceCardType } from '../components/blocks/place-card/types';

type InitialStateType = {
  city: CityPropsType;
  places: Array<PlaceCardType>;
}

const initialState: InitialStateType = {
  city: cities[2],
  places
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city.name = action.payload.name;
    });
});

