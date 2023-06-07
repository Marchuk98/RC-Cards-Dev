import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {PacksResponseType, QueryParams} from "./types.ts";
import {packAPI} from "./pack.api.ts";
import {errorUtils} from "../../../../common/utils/error-utils.ts";
import {RootState} from "../../../../app/store.ts";

type ThunkAPIType = {
    rejectValue: string
    state: RootState
}

type InitialStateType = {
    packList: PacksResponseType
    queryParams: QueryParams
}

const initialState:InitialStateType = {
    packList: {
        minCardsCount: 0,
        maxCardsCount: 0,
        page: 0,
        pageCount: 7,
        cardPacks: [],
        cardPacksTotalCount: 100,
    },
    queryParams: {
        min: 0,
        max: 0,
        packName: '',
        user_id: '',
        block: false,
        page: 0,
        pageCount: 7,
        sortPacks: '0updated',
    },
}


export const getPacks = createAsyncThunk<PacksResponseType, void,ThunkAPIType>(
    "/cards/pack",
    async (_, { rejectWithValue,getState }) => {
        try {
            const params = getState().packListReducer.queryParams
            const response = await packAPI.getPacks({...params});
            return  response.data
        } catch (e) {
            const error = errorUtils(e);
            return rejectWithValue(error);
        }
    }
);

export const packListSlice = createSlice({
    name:"pack-list",
    initialState,
    reducers:{},
    extraReducers:builder => {
        builder
            .addCase(getPacks.fulfilled, (state, action) => {
                console.log('appp', action.payload)
               state.packList = action.payload
            })
    }
})

export const {reducer: packListReducer} = packListSlice

export const packsThunks = {getPacks}