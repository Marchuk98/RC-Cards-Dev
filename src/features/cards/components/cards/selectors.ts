import {RootState} from "../../../../app/store.ts";


const cardPackCardItem = (state:RootState) => state.packCardsReducer.packCards.cards
const pageParams = (state:RootState) => state.packListReducer.queryParams.page
const pageCountParams = (state:RootState) => state.packListReducer.queryParams.pageCount
const sortPacks = (state:RootState) => state.packCardsReducer.queryParams.sortCards
const cardUserId = (state:RootState) => state.packCardsReducer.queryParams.cardsPack_id
const cardStatus = (state:RootState) => state.packCardsReducer.status
const cardPageCount = (state:RootState)=> state.packCardsReducer.packCards.pageCount
const cardPackUserId = (state:RootState) => state.packCardsReducer.packCards.packUserId


export {
    cardPackCardItem,
    pageParams,
    pageCountParams,
    sortPacks,
    cardUserId,
    cardStatus,
    cardPageCount,
    cardPackUserId
}