import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RequestStatus } from '../../components/utils/types';
import { ReviewType } from '../../components/blocks/review-item/types';
import { fetchComments, postComment } from '../thunks/comments';

type ReviewStateType = {
  reviews: ReviewType[];
  status: RequestStatus;
  serverError: string;
}

const initialState: ReviewStateType = {
  reviews: [],
  status: RequestStatus.Idle,
  serverError: ''
};

const reviewSlice = createSlice({
  extraReducers: (builder) =>
    builder
      .addCase(fetchComments.pending, (state) => {
        state.status = RequestStatus.Loading;
      })
      .addCase(fetchComments.fulfilled, (state, action) => {
        state.status = RequestStatus.Success;
        state.reviews = action.payload;
      })
      .addCase(fetchComments.rejected, (state) => {
        state.status = RequestStatus.Failed;
      })
      .addCase(postComment.pending, (state) => {
        state.status = RequestStatus.Loading;
      })
      .addCase(postComment.fulfilled, (state, action: PayloadAction<ReviewType>) => {
        state.status = RequestStatus.Success;
        state.reviews.push(action.payload);
      })
      .addCase(postComment.rejected, (state) => {
        state.status = RequestStatus.Failed;
      }),
  initialState,
  name: 'review',
  reducers: {
  },
  selectors: {
    reviewStatus: (state) => state.status,
    reviews: (state) => state.reviews,
  }
});

const reviewActions = {... reviewSlice.actions, fetchComments, postComment};
const reviewSliceSelectors = {...reviewSlice.selectors};
export { reviewSlice, reviewActions, reviewSliceSelectors};
