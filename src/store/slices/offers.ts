import { PayloadAction, createSelector, createSlice } from "@reduxjs/toolkit";
import { CityPropsType, PlaceCardType } from "../../components/blocks/place-card/types";
import { cities, places } from "../../components/utils/mocks";
import { RequestStatus } from "../../components/utils/types";
import { fetchAllOffers } from "../thunks/offers";

type InitialStateType = {
  city: CityPropsType;
  places: Array<PlaceCardType>;
  status: RequestStatus
}

const initialState: InitialStateType = {
  city: cities[0],
  places,
  status: RequestStatus.Idle
};

const offersSlice = createSlice({
  extraReducers: builder =>
  builder
  .addCase(fetchAllOffers.pending, state => {
    state.status = RequestStatus.Loading
  })
  .addCase(fetchAllOffers.fulfilled, (state, action) => {
    state.status === RequestStatus.Success;
    state.places = action.payload
  })
  .addCase(fetchAllOffers.rejected, (state) => {
    state.status === RequestStatus.Failed
  }),
  initialState,
  name: 'offers',
  reducers: {
    changeCity: (state, action: PayloadAction<{ name: CityPropsType['name'] }>) => {
      state.city.name = action.payload.name;
    }
  },
  selectors: {
    city: (state) => state.city,
    offers: (state) => state.places,
    status: (state) => state.status
  }
})

const offersActions = offersSlice.actions;
const offersSelectors = {
  ...offersSlice.selectors,
  cityOffers: createSelector(offersSlice.selectors.offers, offersSlice.selectors.city,
    (allOffers, city) => { allOffers.filter((offer) => offer.city.name === city.name) })
}

export { offersActions, offersSlice, offersSelectors };
