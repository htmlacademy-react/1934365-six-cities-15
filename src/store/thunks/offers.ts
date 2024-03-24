import { createAsyncThunk } from "@reduxjs/toolkit";
import { PlaceCardType } from "../../components/blocks/place-card/types";
import { AxiosInstance } from "axios";
import { Endpoint } from "../../components/utils/constants";

const fetchAllOffers = createAsyncThunk<PlaceCardType[], undefined, { extra: AxiosInstance }>
  ('fetchOffers/All', async (_arg, { extra: api }) => {
    const response = await api.get<PlaceCardType[]>(Endpoint.Offers);
    return response.data
  })

export { fetchAllOffers }
