import {createAsyncThunk, createSlice, isFulfilled, isPending, isRejected, PayloadAction} from "@reduxjs/toolkit";
import {StatusType} from "../../../../common/type/types.ts";
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
    status: StatusType
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
    status: "idle"
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
const pending = isPending(getPacks)
const fulfilled = isFulfilled(getPacks)
const rejected = isRejected(getPacks)


export const packListSlice = createSlice({
    name:"pack-list",
    initialState,
    reducers:{
        setQueryParams(state,action:PayloadAction<Partial<QueryParams>>){
            state.queryParams = {...state.queryParams, ...action.payload}
        },
        resetQueryParams: state => {
            state.queryParams = initialState.queryParams
        },
    },
    extraReducers:builder => {
        builder
            .addCase(getPacks.fulfilled, (state, action) => {
                state.packList = action.payload
                state.status = 'succeeded'
            })
            .addMatcher(pending, state => {
                state.status = 'loading'
            })
            .addMatcher(fulfilled, state => {
                state.status = 'succeeded'
            })
            .addMatcher(rejected, state => {
                state.status = 'failed'
            })
    }
})

export const {reducer: packListReducer, actions:packActions} = packListSlice

export const packsThunks = {getPacks}