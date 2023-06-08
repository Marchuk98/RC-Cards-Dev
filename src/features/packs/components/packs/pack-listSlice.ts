import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
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
        cardsPack_id: '',
        packName: '',
        user_id: '',
        block: false,
        page: 0,
        pageCount: 7,
        sortPacks: '0updated',
    },
}


export const getPacks = createAsyncThunk<PacksResponseType, { cardsPack_id: string },ThunkAPIType>(
    "/cards/pack",
    async (id, { rejectWithValue,getState }) => {
        try {
            const params = getState().packListReducer.queryParams
            const response = await packAPI.getPacks({...params,...id});
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
    reducers:{
        setQueryParams(state,action:PayloadAction<Partial<QueryParams>>){
            state.queryParams = {...state.queryParams, ...action.payload}
        }
    },
    extraReducers:builder => {
        builder
            .addCase(getPacks.fulfilled, (state, action) => {
                console.log('appp', action.payload)
               state.packList = action.payload
            })
    }
})

export const {reducer: packListReducer, actions:packActions} = packListSlice

export const packsThunks = {getPacks}