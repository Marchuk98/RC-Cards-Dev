import {RootState} from '../../../../app/store.ts'

const packNameParams = (state: RootState) => state.packListReducer.queryParams.packName
const pageParamParams = (state: RootState) => state.packListReducer.queryParams.page
const pageCountParams = (state: RootState) => state.packListReducer.queryParams.pageCount
const packSortParam = (state:RootState) => state.packListReducer.queryParams.sortPacks
const packCardItem =(state:RootState) => state.packListReducer.packList.cardPacks
const packListMinCardsCount = (state: RootState) => state.packListReducer.packList.minCardsCount
const packListMaxCardsCount = (state: RootState) => state.packListReducer.packList.maxCardsCount
const minParams = (state: RootState) => state.packListReducer.queryParams.min
const maxParams = (state: RootState) => state.packListReducer.queryParams.max
const packListPageCount = (state: RootState) => state.packListReducer.packList.pageCount
const packListPage = (state: RootState) => state.packListReducer.packList.page
const userIdParams = (state: RootState) => state.packListReducer.queryParams.user_id
const packListStatus = (state: RootState) => state.packListReducer.status


export {
    packNameParams,
    pageParamParams,
    pageCountParams,
    packSortParam,
    packListMinCardsCount,
    packListMaxCardsCount,
    minParams,
    maxParams,
    packListPageCount,
    packListPage,
    userIdParams,
    packListStatus,
    packCardItem
}



