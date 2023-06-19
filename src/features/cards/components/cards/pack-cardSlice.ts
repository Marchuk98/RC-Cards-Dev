import {createAsyncThunk, createSlice, isFulfilled, isPending, isRejected, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "../../../../app/store.ts";
import {StatusType} from "../../../../common/type/types.ts";
import {errorUtils} from "../../../../common/utils/error-utils.ts";
import {learnActions} from "../../../learn/learn-slice.ts";
import {packCardsApi} from "./packCards-api.ts";
import {CardQueryParams, CardsResponseType, UpdateCardRequestType} from "./types.ts";

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
        packUserId: '',
        cards: [],
        page: 1,
        pageCount: 7,
        minGrade: 0,
        maxGrade: 0,
        cardsTotalCount: 100,
        packDeckCover: '',
        packCreated:'',
        packPrivate:false,
        packUpdated:'',
        packName: ""

    },
    queryParams: {
        min: 0,
        max: 0,
        cardQuestion: '',
        cardsPack_id: '',
        page: 1,
        pageCount: 7,
        sortCards: '0updated',
        cardAnswer: '',
    },
    status: "idle"
}

export const getCards  = createAsyncThunk<CardsResponseType,{ cardsPack_id: string },ThunkAPIType>(
    'pack-cards/getCards',
    async(id,{rejectWithValue,getState, dispatch}) => {
        const params = getState().packCardsReducer.queryParams
        try {
            const response = await packCardsApi.getCards({...params,...id});
            dispatch(learnActions.setLearnCards({ cards: response.data.cards }))
            return response.data
        }catch (e){
            const error = errorUtils(e)
            return rejectWithValue(error)
        }
})
export const addCard = createAsyncThunk<void, AddCardRequestType, ThunkAPIType>(
    'pack/add-card',
    async (data, { dispatch, getState, rejectWithValue }) => {
        const cardsPack_id = getState().packCardsReducer.queryParams.cardsPack_id

        try {
            await packCardsApi.addCard(data)

            dispatch(getCards({ cardsPack_id }))
        } catch (e) {
            const error = errorUtils(e)

            return rejectWithValue(error)
        }
    }
)

export const updateCard = createAsyncThunk<void, UpdateCardRequestType, ThunkAPIType>(
    'pack/update-card',
    async (data, { rejectWithValue, dispatch, getState }) => {
        const cardsPack_id = getState().packCardsReducer.queryParams.cardsPack_id

        try {
            await packCardsApi.updateCard(data)
            dispatch(getCards({ cardsPack_id }))
        } catch (e) {
            const error = errorUtils(e)

            return rejectWithValue(error)
        }
    }
)

export const deleteCard = createAsyncThunk<void, string, ThunkAPIType>(
    'pack/delete-card',
    async (id: string, { rejectWithValue, dispatch, getState }) => {
        const cardsPack_id = getState().packCardsReducer.queryParams.cardsPack_id

        try {
            await packCardsApi.deleteCard(id)
            dispatch(getCards({ cardsPack_id }))
        } catch (e) {
            const error = errorUtils(e)

            return rejectWithValue(error)
        }
    }
)
const pending = isPending(getCards)
const fulfilled = isFulfilled(getCards)
const rejected = isRejected(getCards)


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
        resetCardData: () => {
            return initialState
        },
    },
    extraReducers:builder => {
        builder
            .addCase(getCards.fulfilled,(state, action)=>{
                state.packCards = action.payload
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
    },
})


export const {reducer:packCardsReducer,actions:packCardsActions} = packCardSlice

export const packsThunks = {getCards}