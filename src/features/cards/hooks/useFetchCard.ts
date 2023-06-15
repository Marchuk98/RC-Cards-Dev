import {useAppDispatch, useAppSelector} from "../../../app/hooks.ts";
import {cardPageCount, cardPageParam, cardSortPacks} from "../components/cards/selectors.ts";
import {useParams} from "react-router-dom";
import {useEffect} from "react";
import {getCards, packCardsActions} from "../components/cards/pack-cardSlice.ts";


export const useFetchCard = () => {
    const pageParams = useAppSelector(cardPageParam)
    const pageCount = useAppSelector(cardPageCount)
    const sortPacks = useAppSelector(cardSortPacks)
    const dispatch = useAppDispatch()
    const {packId} = useParams<{packId:string}>()

    useEffect(() => {
        dispatch(getCards({ cardsPack_id: packId as string }))
    }, [pageParams, pageCount, sortPacks])

    useEffect(() => {
        dispatch(packCardsActions.setQueryParams({ cardsPack_id: packId as string }))

        return () => {
            dispatch(packCardsActions.resetQueryParams())
        }
    }, [])
}