import { createAsyncThunk } from "@reduxjs/toolkit";
import { Endpoint } from "../../components/utils/constants";
import { User, loginData } from "../../components/utils/types";
import { AxiosInstance } from "axios";
import { dropToken, saveToken } from "../../services/token";

const checkAuth = createAsyncThunk<User, undefined, { extra: AxiosInstance }>
  ('auth/checkAuth', async (_arg, { extra: api }) => {
    const response = await api.get<User>(Endpoint.Login);
    return response.data
  })

const login = createAsyncThunk<User, loginData, { extra: AxiosInstance }>
  ('auth/login', async (body, { extra: api }) => {
    console.log(body)
    const response = await api.post<User>(Endpoint.Login, body);
    saveToken(response.data.token)
    return response.data
  })

const logout = createAsyncThunk<unknown, undefined, { extra: AxiosInstance }>
  ('auth/logout', async (_, { extra: api }) => {
    await api.delete(Endpoint.Logout);
    dropToken()
  })

export { checkAuth, login, logout }
