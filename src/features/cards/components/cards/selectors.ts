import {RootState} from "../../../../app/store.ts";

const cardPackCardItem = (state:RootState) => state.packCardsReducer.packCards.cards
const cardPageParam = (state:RootState) => state.packCardsReducer.queryParams.page
const cardPageCount = (state:RootState) => state.packCardsReducer.queryParams.pageCount
const cardSortPacks = (state:RootState) => state.packCardsReducer.queryParams.sortCards
const cardUserId = (state:RootState) => state.packCardsReducer.queryParams.cardsPack_id
const cardStatus = (state:RootState) => state.packCardsReducer.status
const cardPackUserId = (state:RootState) => state.packCardsReducer.packCards.packUserId
const cardsTotalCount = (state:RootState) => state.packCardsReducer.packCards.cardsTotalCount

export {
    cardPackCardItem,
    cardPageParam,
    cardSortPacks,
    cardUserId,
    cardStatus,
    cardPageCount,
    cardPackUserId,
    cardsTotalCount
}