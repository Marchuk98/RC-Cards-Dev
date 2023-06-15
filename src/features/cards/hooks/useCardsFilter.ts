import {useAppDispatch, useAppSelector} from "../../../app/hooks.ts";
import {cardPageCount, cardPageParam, cardsTotalCount} from "../components/cards/selectors.ts";
import {useCallback} from "react";
import {packCardsActions} from "../components/cards/pack-cardSlice.ts";



export const useCardsFilter = () =>  {
    const pageParams = useAppSelector(cardPageParam)
    const pageCount = useAppSelector(cardPageCount)
    const totalCount = useAppSelector(cardsTotalCount)
    const dispatch = useAppDispatch()

    const onChangePagination = useCallback(
        (page: number) => {
            dispatch(packCardsActions.setQueryParams({page}));
        },
        [dispatch]
    );

    const onChangePageCount = useCallback(
        (pageCount: number) => {
            dispatch(packCardsActions.setQueryParams({pageCount}));
        },
        [dispatch]
    );


    return {
        pageParams,
        pageCount,
        totalCount,
        onChangePagination,
        onChangePageCount
    }
}