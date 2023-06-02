import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {StatusType} from "../common/type/types.ts";

type AppInitialStateType = {
    error: string | null;
    status: StatusType;
    isInitialized: boolean
};

const initialState: AppInitialStateType = {
    error: null,
    status: "idle",
    isInitialized: false
};

const appSlice = createSlice({
    name: "app",
    initialState,
    reducers: {
        setError: (state, action: PayloadAction<{error:string|null}>) => {
            state.error = action.payload.error;
        },
        setStatus: (state, action: PayloadAction<StatusType>) => {
            state.status = action.payload;
        },
        setIsInitialized: (state, action:PayloadAction<{isInitialized: boolean}>)=>{
            state.isInitialized = action.payload.isInitialized
        }
    }
});

export const { setError, setStatus } = appSlice.actions;
export const { reducer: appReducer, actions: appActions } = appSlice;