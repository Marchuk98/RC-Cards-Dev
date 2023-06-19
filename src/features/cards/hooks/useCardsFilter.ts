import {useCallback} from "react";
import {useAppDispatch, useAppSelector} from "../../../app/hooks.ts";
import {cardQuestionParams} from "../components/cards/cardSelectors.ts";
import {packCardsActions} from "../components/cards/pack-cardSlice.ts";
import {cardPageCount, cardPageParam, cardsTotalCount} from "../components/cards/selectors.ts";


export const useCardsFilter = () => {
    const pageParams = useAppSelector(cardPageParam)
    const pageCount = useAppSelector(cardPageCount)
    const totalCount = useAppSelector(cardsTotalCount)
    const searchValue = useAppSelector(cardQuestionParams)
    const dispatch = useAppDispatch()

    const onChangePagination = useCallback(
        (page: number) => {
            dispatch(packCardsActions.setQueryParams({page}));
        },
        [dispatch]
    );

    const onSearchChange = useCallback((search: string) => {
            dispatch(packCardsActions.setQueryParams({cardQuestion: search}))
        },
        [])

    const onChangePageCount = useCallback(
        (pageCount: number) => {
            dispatch(packCardsActions.setQueryParams({pageCount}));
        },
        [dispatch]
    );


    return {
        searchValue,
        pageParams,
        pageCount,
        totalCount,
        onChangePagination,
        onChangePageCount,
        onSearchChange
    }
}