import {createSlice} from "@reduxjs/toolkit";
import {ProfileStateType} from "./profile.api.ts";
import {authMe, loginUser} from "../../auth.slice.ts";


const initialState = {
    profile:{},
}as ProfileStateType


const profileSlice = createSlice({
    name:"profile",
    initialState,
    reducers:{},
    extraReducers:builder => {
        builder
            .addCase(loginUser.fulfilled,(state,action)=> {
                state.profile = action.payload.profile
            })
            .addCase(authMe.fulfilled,(state,action)=> {
                state.profile = action.payload.profile
            })
    }
})

export const {reducer:profileReducer} = profileSlice