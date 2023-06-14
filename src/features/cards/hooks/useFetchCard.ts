import {useAppDispatch, useAppSelector} from "../../../app/hooks.ts";
import {pageParamParams} from "../../packs/selectors.ts";
import {pageParams, sortPacks} from "../components/cards/selectors.ts";
import {useParams} from "react-router-dom";
import {useEffect} from "react";
import {getCards, packCardsActions} from "../components/cards/pack-cardSlice.ts";


export const useFetchCard = () => {
    const cardPageParam = useAppSelector(pageParams)
    const cardPageCountParams = useAppSelector(pageParamParams)
    const cardSortPacks = useAppSelector(sortPacks)
    const dispatch = useAppDispatch()
    const {packId} = useParams<{packId:string}>()

    useEffect(() => {
        dispatch(getCards({ cardsPack_id: packId as string }))
    }, [cardPageParam, cardPageCountParams, cardSortPacks])

    useEffect(() => {
        dispatch(packCardsActions.setQueryParams({ cardsPack_id: packId as string }))

        return () => {
            dispatch(packCardsActions.resetQueryParams())
        }
    }, [])
}