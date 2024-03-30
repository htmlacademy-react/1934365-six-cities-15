import { createSlice } from "@reduxjs/toolkit"
import { PlaceCardType } from "../../components/blocks/place-card/types"
import { RequestStatus } from "../../components/utils/types";
import { fetchFullOffer, fetchNearbyOffers } from "../thunks/offers";

type OfferStateType = {
  offer: PlaceCardType | null;
  nearbyOffers: PlaceCardType[],
  status: RequestStatus
}

const initialState: OfferStateType = {
  offer: null,
  nearbyOffers: [],
  status: RequestStatus.Idle
}

const fullOfferSlice = createSlice({
  extraReducers: builder =>
  builder
  .addCase(fetchFullOffer.pending, state => {
    state.status = RequestStatus.Loading
  })
  .addCase(fetchFullOffer.fulfilled, (state, action) => {
    state.status = RequestStatus.Success;
    state.offer = action.payload
  })
  .addCase(fetchFullOffer.rejected, (state) => {
    state.status = RequestStatus.Failed
  })
  .addCase(fetchNearbyOffers.fulfilled, (state, action) => {
    state.nearbyOffers = action.payload
  }),
  initialState,
  name: 'fullOffer',
  reducers: {
    clear: (state) => {
      state.offer = null;
      state.nearbyOffers = []
    }
  },
  selectors: {
    status: (state) => state.status,
    offer: (state) => state.offer,
    nearbyOffers: (state) => state.nearbyOffers,
  }
})

const fullOfferActions = {... fullOfferSlice.actions, fetchFullOffer, fetchNearbyOffers};
const fullOfferSliceSelectors = {...fullOfferSlice.selectors}
export { fullOfferSlice, fullOfferActions, fullOfferSliceSelectors}
