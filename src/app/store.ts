import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit"
import {authReducer} from "../features/auth/auth.slice.ts";
import {appReducer} from "./app.slice.ts";


export const store = configureStore({
  reducer: {
    authReducer,
    appReducer,
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
