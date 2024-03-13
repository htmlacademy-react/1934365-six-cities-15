import { store } from '.';

export type State = ReturnType<typeof store.getState>
export type AddDispatch = typeof store.dispatch
