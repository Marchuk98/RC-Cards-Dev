import {useEffect} from "react";
import {useParams} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../../app/hooks.ts";
import {cardQuestionParams} from "../components/cards/cardSelectors.ts";
import {getCards, packCardsActions} from "../components/cards/pack-cardSlice.ts";
import {cardPageCount, cardPageParam, cardSortPacks} from "../components/cards/selectors.ts";


export const useFetchCard = () => {
    const pageParams = useAppSelector(cardPageParam)
    const pageCount = useAppSelector(cardPageCount)
    const sortPacks = useAppSelector(cardSortPacks)
    const searchValue = useAppSelector(cardQuestionParams)
    const dispatch = useAppDispatch()
    const {packId} = useParams<{packId:string}>()

    useEffect(() => {
        dispatch(getCards({ cardsPack_id: packId as string }))
    }, [pageParams, pageCount, sortPacks, searchValue])

    useEffect(() => {
        dispatch(packCardsActions.setQueryParams({ cardsPack_id: packId as string }))

        return () => {
            dispatch(packCardsActions.resetQueryParams())
        }
    }, [])
}