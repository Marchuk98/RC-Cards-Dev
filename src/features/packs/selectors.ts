import {RootState} from '../../app/store.ts'


export const packNameParams = (state: RootState) => state.packListReducer.queryParams.packName
export const pageParamParams = (state: RootState) => state.packListReducer.queryParams.page
export const pageCountParams = (state: RootState) => state.packListReducer.queryParams.pageCount
