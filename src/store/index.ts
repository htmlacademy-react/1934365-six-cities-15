import { configureStore } from '@reduxjs/toolkit';
import { offersSlice } from './slices/offers';
import { createAPI } from '../services/api';
import { fullOfferSlice } from './slices/full-offer';
import { reviewSlice } from './slices/review';
import { userSlice } from './slices/user';

export const store = configureStore({
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({thunk: {extraArgument: createAPI()}}),
  reducer: {
    [offersSlice.name]: offersSlice.reducer,
    [fullOfferSlice.name]: fullOfferSlice.reducer,
    [reviewSlice.name]: reviewSlice.reducer,
    [userSlice.name]: userSlice.reducer
  }
});
