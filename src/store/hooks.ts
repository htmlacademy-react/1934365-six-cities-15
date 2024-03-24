import { ActionCreatorsMapObject, bindActionCreators } from "@reduxjs/toolkit";
import { useMemo } from "react";
import { State } from "./store";
import { useDispatch, TypedUseSelectorHook, useSelector } from "react-redux";
import { AppDispatch } from "./store";

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<State> = useSelector;

export const useActionCreators = <Actions extends ActionCreatorsMapObject>(actions: Actions) => {
	const dispatch = useAppDispatch();

	// eslint-disable-next-line react-hooks/exhaustive-deps
	return useMemo(() => bindActionCreators(actions, dispatch), []);
};
