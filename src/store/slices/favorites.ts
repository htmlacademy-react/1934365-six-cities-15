import { createSlice } from '@reduxjs/toolkit';
import { PlaceCardType } from '../../components/blocks/place-card/types';
import { RequestStatus } from '../../components/utils/types';
import { changeFavorite, fetchFavorites } from '../thunks/favorites';

type InitialStateType = {
  offers: PlaceCardType[];
  status: RequestStatus;
}

const initialState: InitialStateType = {
  offers: [],
  status: RequestStatus.Idle
};

const favoritesSlice = createSlice({
  extraReducers: (builder) =>
    builder
      .addCase(fetchFavorites.pending, (state) => {
        state.status = RequestStatus.Loading;
      })
      .addCase(fetchFavorites.rejected, (state) => {
        state.status = RequestStatus.Failed;
      })
      .addCase(fetchFavorites.fulfilled, (state, action) => {
        state.offers = action.payload;
        state.status = RequestStatus.Success;
      })
      .addCase(changeFavorite.pending, (state) => {
        state.status = RequestStatus.Loading;
      })
      .addCase(changeFavorite.rejected, (state) => {
        state.status = RequestStatus.Failed;
      })
      .addCase(changeFavorite.fulfilled, (state, action) => {
        switch (action.payload.status) {
          case 1:
            state.offers.push(action.payload.offer);
            break;
          case 0:
            state.offers = state.offers.filter(({ id }) => id !== action.payload.offer.id);
        }
      }),
  initialState,
  name: 'favorites',
  reducers: {},
  selectors: {
    favoriteStatus: (state) => state.status,
    favorites: (state) => state.offers
  }
});

const favoriteSelectors = favoritesSlice.selectors;
const favoriteActions = {...favoritesSlice.actions, fetchFavorites, changeFavorite};
export { favoritesSlice, favoriteActions, favoriteSelectors };
