import { StatusType } from "../common/type/types.ts";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type AppInitialStateType = {
    error: string | null;
    status: StatusType;
};

const initialState: AppInitialStateType = {
    error: null,
    status: "idle",
};

const appSlice = createSlice({
    name: "app",
    initialState,
    reducers: {
        setError: (state, action: PayloadAction<string>) => {
            state.error = action.payload;
        },
        setStatus: (state, action: PayloadAction<StatusType>) => {
            state.status = action.payload;
        },
    },
});

export const { setError, setStatus } = appSlice.actions;
export const { reducer: appReducer, actions: appActions } = appSlice;