import { createAsyncThunk } from '@reduxjs/toolkit';
import { PlaceCardType } from '../../components/blocks/place-card/types';
import { AxiosInstance } from 'axios';
import { Endpoint } from '../../components/utils/constants';

const fetchAllOffers = createAsyncThunk<PlaceCardType[], undefined, { extra: AxiosInstance }>
('fetchOffers/All', async (_arg, { extra: api }) => {
  const response = await api.get<PlaceCardType[]>(Endpoint.Offers);
  return response.data;
});

const fetchFullOffer = createAsyncThunk<PlaceCardType, string, { extra: AxiosInstance }>
('fetchOffers/One', async (offerId, { extra: api }) => {
  const response = await api.get<PlaceCardType>(`${Endpoint.Offers}/${offerId}`);
  return response.data;
});

const fetchNearbyOffers = createAsyncThunk<PlaceCardType[], string, { extra: AxiosInstance }>
('fetchOffers/nearby', async (offerId, { extra: api }) => {
  const response = await api.get<PlaceCardType[]>(`${Endpoint.Offers}/${offerId}/nearby`);
  return response.data;
});

export { fetchAllOffers, fetchFullOffer, fetchNearbyOffers };
