import { PayloadAction, createSelector, createSlice } from '@reduxjs/toolkit';
import { CityPropsType, PlaceCardType } from '../../components/blocks/place-card/types';
import { cities } from '../../components/utils/mocks';
import { RequestStatus } from '../../components/utils/types';
import { fetchAllOffers } from '../thunks/offers';

type InitialStateType = {
  city: CityPropsType;
  places: Array<PlaceCardType>;
  status: RequestStatus;
  activeId: PlaceCardType['id'] | null;
}

const initialState: InitialStateType = {
  city: cities[0],
  places: [],
  status: RequestStatus.Idle,
  activeId: null
};

const offersSlice = createSlice({
  extraReducers: (builder) =>
    builder
      .addCase(fetchAllOffers.pending, (state) => {
        state.status = RequestStatus.Loading;
      })
      .addCase(fetchAllOffers.fulfilled, (state, action) => {
        state.status = RequestStatus.Success;
        state.places = action.payload;
      })
      .addCase(fetchAllOffers.rejected, (state) => {
        state.status = RequestStatus.Failed;
      }),
  initialState,
  name: 'offers',
  reducers: {
    changeCity: (state, action: PayloadAction<{ name: CityPropsType['name'] }>) => {
      state.city.name = action.payload.name;
    },
    setActiveId: (state, action: PayloadAction<PlaceCardType['id']>) => {
      state.activeId = action.payload;
    }
  },
  selectors: {
    city: (state) => state.city,
    offers: (state) => state.places,
    status: (state) => state.status,
    activeId: (state) => state.activeId
  }
});

const offersActions = {...offersSlice.actions, fetchAllOffers};
const offersSelectors = {
  ...offersSlice.selectors,
  cityOffers: createSelector(offersSlice.selectors.offers, offersSlice.selectors.city,
    (allOffers, city) => {
      allOffers.filter((offer) => offer.city.name === city.name);
    })
};

export { offersActions, offersSlice, offersSelectors };
