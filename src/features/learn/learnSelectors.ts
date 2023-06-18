import {RootState} from "../../app/store.ts";

export const learnCard = (state: RootState) => state.learnReducer.card
export const learnCards = (state: RootState) => state.learnReducer.cards
export const learnPageStatus = (state: RootState) => state.learnReducer.status
