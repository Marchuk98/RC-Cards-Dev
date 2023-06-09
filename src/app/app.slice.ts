import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {isAxiosError} from "axios";
import {toast} from "react-toastify";
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
                (state, { payload: { error } }) => {
                    state.status = "failed"
                    const errorMessage = getErrorMessage(error)
                    if (errorMessage === null) return
                    toast.error(errorMessage)
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

/* if null is returned no message should be shown */
function getErrorMessage(error: unknown): null | string {
    if (isAxiosError(error)) {
        if (
            error?.response?.status === 401 &&
            error?.request.responseURL.endsWith("/me")
        ) {
            return null
        }
        return error?.response?.data?.error ?? error.message
    }
    if (error instanceof Error) {
        return `Native error: ${error.message}`
    }
    return JSON.stringify(error)
}

export const { setError, setStatus } = appSlice.actions;
export const { reducer: appReducer, actions: appActions } = appSlice;