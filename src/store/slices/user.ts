import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { AuthorizationStatus, RequestStatus, User } from "../../components/utils/types"
import { checkAuth, login, logout } from "../thunks/auth";

type UserState = {
  info: User | null;
  requestStatus: RequestStatus;
  status: AuthorizationStatus
}

const initialState: UserState = {
  info: null,
  requestStatus: RequestStatus.Idle,
  status: AuthorizationStatus.Unknown
}

function processSuccess(state: UserState, action: PayloadAction<User>) {
  state.requestStatus = RequestStatus.Success;
  state.info = action.payload;
  console.log(action.payload)
  state.status = AuthorizationStatus.Auth
}

function processLoading(state: UserState) {
  state.requestStatus = RequestStatus.Loading
}

function processFailed(state: UserState) {
  state.requestStatus = RequestStatus.Failed
}

const userSlice = createSlice({
  extraReducers: builder => {
    builder.addCase(checkAuth.pending, processLoading)
    builder.addCase(checkAuth.fulfilled, processSuccess)
    builder.addCase(checkAuth.rejected, processFailed)
    builder.addCase(login.pending, processLoading)
    builder.addCase(login.fulfilled, processSuccess)
    builder.addCase(login.rejected, processFailed)
    builder.addCase(logout.fulfilled, (state: UserState) => {
      state.info = null;
      state.status = AuthorizationStatus.NoAuth
    })
  },
  initialState,
  name: 'user',
  reducers: {

  },
  selectors: {
    user: state => state.info,
    userStatus: state => state.status,
    userRequestStatus: state => state.requestStatus
  }
})

export const userActions = { ...userSlice.actions, checkAuth, login, logout }
export const userSliceSelectors = { ...userSlice.selectors }
export { userSlice }
