import { createAsyncThunk } from '@reduxjs/toolkit';
import { ReviewType } from '../../components/blocks/review-item/types';
import { AxiosInstance } from 'axios';
import { Endpoint } from '../../components/utils/constants';
import { PlaceCardType } from '../../components/blocks/place-card/types';

const fetchComments = createAsyncThunk<ReviewType[], PlaceCardType['id'], {extra: AxiosInstance}>
('comments/fetch', async(offerId, {extra: api}) => {
  const response = await api.get<ReviewType[]>(`${Endpoint.Comments}/${offerId}`);
  return response.data;
});

type PostCommentsPropsType = {
  body: {
    comment: string;
    rating: number;
  };
  offerId: PlaceCardType['id'];
}

const postComment = createAsyncThunk<ReviewType, PostCommentsPropsType, {extra: AxiosInstance}>
('comments/post', async({body, offerId}, {extra: api}) => {
  const data = {comment: body.comment, rating: Number(body.rating)};
  const response = await api.post<ReviewType>(`${Endpoint.Comments}/${offerId}`, data);
  return response.data;
});

export {fetchComments, postComment};
