import {RootState} from '../../app/store.ts'


export const packNameParams = (state: RootState) => state.packListReducer.queryParams.packName
export const pageParamParams = (state: RootState) => state.packListReducer.queryParams.page
export const pageCountParams = (state: RootState) => state.packListReducer.queryParams.pageCount
export const packListMinCardsCount = (state: RootState) => state.packListReducer.packList.minCardsCount
export const packListMaxCardsCount = (state: RootState) => state.packListReducer.packList.maxCardsCount
export const minParams = (state: RootState) => state.packListReducer.queryParams.min
export const maxParams = (state: RootState) => state.packListReducer.queryParams.max
export const packListPageCount = (state: RootState) => state.packListReducer.packList.pageCount
export const packListPage = (state: RootState) => state.packListReducer.packList.page
export const userIdParams = (state: RootState) => state.packListReducer.queryParams.user_id



export const packListStatus = (state: RootState) => state.packListReducer.status



