import {createSlice, isFulfilled, PayloadAction} from "@reduxjs/toolkit";
import {ModalDataType, ModalStateType} from "./types.ts";
import {getPacks} from "../packs/components/packs/pack-listSlice.ts";
import {getCards} from "../cards/components/cards/pack-cardSlice.ts";

type InitialStateType = {
    modalData: ModalDataType
    modalState: ModalStateType
}

const initialState: InitialStateType = {
    modalData: {
        _id: '',
        name: '',
        answer: '',
        question: '',
        packName: '',
        deckCover: '',
        answerImg: '',
        questionImg: '',
    },
    modalState: {
        isDeleteModalVisible: false,
        isEditModalVisible: false,
        isAddedModalVisible: false,
    },
}

const fulfilled = isFulfilled(getCards, getPacks)

const modalsSlice = createSlice({
    name: 'modals',
    initialState,
    reducers: {
        setModalData: (state, action: PayloadAction<Partial<ModalDataType>>) => {
            state.modalData = { ...state.modalData, ...action.payload }
        },
        toggleModal: (state, action: PayloadAction<Partial<ModalStateType>>) => {
            state.modalState = { ...state.modalState, ...action.payload }
        },
        resetModalData: state => {
            state.modalData = initialState.modalData
            state.modalState = initialState.modalState
        },
    },
    extraReducers:builder => {
        builder
            .addMatcher(fulfilled, state => {
                state.modalState = {
                    isAddedModalVisible: false,
                    isEditModalVisible: false,
                    isDeleteModalVisible:false,
                }
                state.modalData = initialState.modalData
            })
    }
})


export const {reducer: modalsReducer, actions: modalsActions} = modalsSlice