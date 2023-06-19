import {RootState} from "../../../../app/store.ts";

export const cardStatus = (state: RootState) => state.packCardsReducer.status
export const packCardPacksName = (state: RootState) => state.packCardsReducer.packCards.packName
export const pageParams = (state: RootState) => state.packCardsReducer.queryParams.page
export const pageCountParams = (state: RootState) => state.packCardsReducer.queryParams.pageCount
export const sortPacksParams = (state: RootState) => state.packCardsReducer.queryParams.sortCards
export const cardQuestionParams = (state: RootState) => state.packCardsReducer.queryParams.cardQuestion

