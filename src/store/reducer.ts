import { createReducer } from '@reduxjs/toolkit';
import { ActionType, changeCity } from './action';
import { cities, places } from '../components/utils/mocks';
import { CityPropsType, PlaceCardType } from '../components/blocks/place-card/types';

type InitialStateType = {
  city: CityPropsType;
  places: Array<PlaceCardType>
}

const initialState: InitialStateType = {
  city: cities[0],
  places
}

export const reducer = (state = initialState, action: {payload: unknown, type: ActionType}): InitialStateType  => {
  switch(action.type) {
    case ActionType.ChangeCity:
      return {
        ...state,
        city: action.payload as CityPropsType
      }
  }
}


