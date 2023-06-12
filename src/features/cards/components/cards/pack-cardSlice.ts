import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {StatusType} from "../../../../common/type/types.ts";
import {RootState} from "../../../../app/store.ts";
import {CardQueryParams, CardsResponseType} from "./types.ts";
import {packCardsApi} from "./packCards-api.ts";
import {errorUtils} from "../../../../common/utils/error-utils.ts";

type ThunkAPIType = {
    rejectValue: string
    state: RootState
}

type InitialStateType = {
    packCards: CardsResponseType
    queryParams: CardQueryParams
    status: StatusType
}

const initialState:InitialStateType = {
    packCards: {
      packUserId:'',
        cardPacks:[],
        page:1,
        pageCount:7,
        minGrade:0,
        maxGrade:0,
        cardsTotalCount:100,
        packName:'',
        packDeckCover:'',
    },
    queryParams: {
        min: 0,
        max: 0,
        cardQuestion:'',
        cardsPack_id: '',
        page: 1,
        pageCount: 7,
        sortCards: '0updated',
        cardAnswer:'',
    },
    status: "idle"
}

export const getCards  = createAsyncThunk<CardsResponseType,{ cardsPack_id: string },ThunkAPIType>(
    'pack-cards/getCards',
    async(id,{rejectWithValue,getState}) => {
        const params = getState().packCardsReducer.queryParams

        try {
            const response = await packCardsApi.getCards({...params,...id});
            return response.data
        }catch (e){
            const error = errorUtils(e)
            return rejectWithValue(error)
        }
})


export const packCardSlice = createSlice({
    name:"cards",
    initialState,
    reducers:{
        setQueryParams(state,action:PayloadAction<Partial<CardQueryParams>>){
            state.queryParams = {...state.queryParams, ...action.payload}
        },
        resetQueryParams: state => {
            state.queryParams = initialState.queryParams
        },
    },
    extraReducers:builder => {
        builder
            .addCase(getCards.fulfilled,(state, action)=>{
                state.packCards = action.payload
            })
    },
})


export const {reducer:packCardsReducer,actions:packCardsActions} = packCardSlice

export const packsThunks = {getCards}