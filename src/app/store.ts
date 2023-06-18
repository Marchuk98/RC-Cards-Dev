import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit"
import {authReducer} from "../features/auth/auth.slice.ts";
import {learnReducer} from "../features/learn/learn-slice.ts";
import {appReducer} from "./app.slice.ts";
import {profileReducer} from "../features/auth/components/profile/profile.slice.ts";
import {packListReducer} from "../features/packs/components/packs/pack-listSlice.ts";
import {packCardsReducer} from "../features/cards/components/cards/pack-cardSlice.ts";
import {modalsReducer} from "../features/modals/modals.slice.ts";


export const store = configureStore({
  reducer: {
    authReducer,
    appReducer,
    profileReducer,
    packListReducer,
    packCardsReducer,
    learnReducer,
    modalsReducer
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
