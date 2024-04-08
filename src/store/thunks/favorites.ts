import { createAsyncThunk } from '@reduxjs/toolkit';
import { PlaceCardType } from '../../components/blocks/place-card/types';
import { Endpoint } from '../../components/utils/constants';
import { AxiosInstance } from 'axios';

type ChangeProps = {
  offerId: string;
  status: number;
}

type ChangeResponse = {
  offer: PlaceCardType;
  status: number;
}

const fetchFavorites = createAsyncThunk<PlaceCardType[], undefined, { extra: AxiosInstance }>
('fetchFavorites/All', async (_arg, { extra: api }) => {
  const response = await api.get<PlaceCardType[]>(Endpoint.Favorite);
  return response.data;
}
);

const changeFavorite = createAsyncThunk<ChangeResponse, ChangeProps, { extra: AxiosInstance }>
('favorites/change', async ({ offerId, status }, { extra: api }) => {
  const response = await api.post<PlaceCardType>(`${Endpoint.Favorite}/${offerId}/${status}`);
  return {offer: response.data, status};
});

export { fetchFavorites, changeFavorite };
