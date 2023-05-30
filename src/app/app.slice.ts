import { StatusType } from "../common/type/types.ts";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type AppInitialStateType = {
    error: string | null;
    status: StatusType;
};

const initialState: AppInitialStateType = {
    error: null,
    status: "loading",
};

const appSlice = createSlice({
    name: "app",
    initialState,
    reducers: {
        setError: (state, action: PayloadAction<string>) => {
            state.error = action.payload;
        },
        resetError: (state) => {
            state.error = null;
        },
        setStatus: (state, action: PayloadAction<StatusType>) => {
            state.status = action.payload;
        },
    },
});

export const { setError, resetError, setStatus } = appSlice.actions;
export const { reducer: appReducer, actions: appActions } = appSlice;