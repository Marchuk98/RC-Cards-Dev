import {StatusType} from "../common/type/types.ts";
import {createSlice} from "@reduxjs/toolkit";


type AppInitialStateType = {
    error:string | null
    status:StatusType
}

const initialState:AppInitialStateType = {
    error:null,
    status:"idle",
}

const appSlice = createSlice({
    name:"app",
    initialState,
    reducers:{},
    extraReducers:builder => {
     builder

    }
})


export const {reducer:appReducer,actions:appActions} = appSlice