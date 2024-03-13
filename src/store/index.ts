import { configureStore } from "@reduxjs/toolkit";
import {reducer} from "./reducer"
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { AddDispatch, State } from "./state";

export const store = configureStore({reducer})
export const useAppDispatch = () => useDispatch<AddDispatch>
export const useAppSelector: TypedUseSelectorHook<State> = useSelector
