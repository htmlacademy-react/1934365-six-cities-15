import { configureStore } from '@reduxjs/toolkit';
import { offersSlice } from './slices/offers';
import { createAPI } from '../services/api';

export const store = configureStore({
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({thunk: {extraArgument: createAPI()}}),
  reducer: {
    [offersSlice.name]: offersSlice.reducer
  }
});
