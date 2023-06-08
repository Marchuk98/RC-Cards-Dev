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
    },
    extraReducers: (builder) => {
        builder
            .addMatcher(
                (action) => {
                    return action.type.endsWith("/pending")
                },
                (state) => {
                    state.status = "loading"
                },
            )
            .addMatcher(
                (action) => {
                    return action.type.endsWith("/rejected")
                },
                (state) => {
                    state.status = "failed"
                },
            )
            .addMatcher(
                (action) => {
                    return action.type.endsWith("/fulfilled")
                },
                (state) => {
                    state.status = "succeeded"                },
            )
    },
});

export const { setError, setStatus } = appSlice.actions;
export const { reducer: appReducer, actions: appActions } = appSlice;