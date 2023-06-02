import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {profileApi, ProfileStateType, UserData} from "./profile.api.ts";
import {loginUser} from "../../auth.slice.ts";
import {errorUtils} from "../../../../common/utils/error-utils.ts";


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
            .addCase(changeUserData.fulfilled, (state, action) => {
                console.log(action.payload)
                state.profile = action.payload.updatedUser;
            })
    }
})

   export const changeUserData = createAsyncThunk(
        "profile/change-user-data",
            async (data:UserData,{rejectWithValue}) => {
            try {
                const response = await profileApi.changeUserData(data)
                return {...response.data}
            }catch (e){
                const error = errorUtils(e)
                return rejectWithValue(error)
            }
}
    )

export const {reducer:profileReducer} = profileSlice