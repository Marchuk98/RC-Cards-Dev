import {createAsyncThunk, createSlice, isFulfilled, isPending, isRejected, PayloadAction,} from '@reduxjs/toolkit'
import {RootState} from "../../app/store.ts";
import {StatusType} from "../../common/type/types.ts";
import {getRandomCard} from "../../common/utils/get-random-card.ts";
import {CardItemType, UpdateGradeRequestType, UpdateGradeResponseType} from "../cards/components/cards/types.ts";
import {learnAPI} from "./learn-api.ts";

type InitialStateType = {
    card: CardItemType
    cards: CardItemType[]
    status: StatusType
}
type ThunkAPIType = {
    rejectValue: { error: string | unknown }
    state: RootState
}
const initialState: InitialStateType = {
    card: {} as CardItemType,
    cards: [],
    status: 'idle',
}

export const updateGrade = createAsyncThunk<
    UpdateGradeResponseType,
    UpdateGradeRequestType,
    ThunkAPIType
>('learn/update-grade', async (data, {rejectWithValue, dispatch, getState}) => {
    const packCards = getState().learnReducer.cards

    try {
        const response = await learnAPI.updateGrade(data)

        dispatch(
            learnActions.setCard(
                {
                    card: getRandomCard(
                        packCards.map(item => {
                            const {card_id, shots, grade} = response.data.updatedGrade

                            return item._id === card_id ? {...item, shots, grade} : item
                        })
                    )
                }
            )
        )

        return response.data
    } catch (e) {
        return rejectWithValue({error: e})
    }
})

const pending = isPending(updateGrade)
const fulfilled = isFulfilled(updateGrade)
const rejected = isRejected(updateGrade)

const learnSlice = createSlice({
    name: 'learn',
    initialState,
    reducers: {
        setCard: (state, action: PayloadAction<{ card: CardItemType }>) => {
            state.card = action.payload.card
        },
        setLearnCards: (state, action: PayloadAction<{ cards: CardItemType[] }>) => {
            state.cards = action.payload.cards
        },
    },
    extraReducers: builder => {
        builder
            .addCase(updateGrade.fulfilled, (state, action) => {
                const {shots, grade, card_id} = action.payload.updatedGrade

                state.cards.forEach(card => {
                    if (card_id === card._id) {
                        card.shots = shots
                        card.grade = grade
                    }
                })
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

export const {reducer: learnReducer, actions: learnActions} = learnSlice
