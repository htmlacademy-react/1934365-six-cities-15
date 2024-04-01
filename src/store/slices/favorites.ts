import { createSlice } from "@reduxjs/toolkit";
import { PlaceCardType } from "../../components/blocks/place-card/types";
import { RequestStatus } from "../../components/utils/types";
import { fetchFavorites } from "../thunks/favorites";

type InitialStateType = {
  offers: PlaceCardType[];
  status: RequestStatus
}

const initialState: InitialStateType = {
  offers: [],
  status: RequestStatus.Idle
}

const favoritesSlice = createSlice({
  extraReducers: builder =>
    builder
      .addCase(fetchFavorites.pending, (state) => {
        state.status = RequestStatus.Loading
      })
      .addCase(fetchFavorites.rejected, (state) => {
        state.status = RequestStatus.Failed
      })
      .addCase(fetchFavorites.fulfilled, (state, action) => {
        state.offers = action.payload;
        state.status = RequestStatus.Success
      }),
  initialState,
  name: 'favorites',
  reducers: {}
})

export { favoritesSlice }
