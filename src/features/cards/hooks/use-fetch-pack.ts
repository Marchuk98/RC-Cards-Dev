import {useEffect} from 'react'

import {useParams} from 'react-router-dom'

import {useAppDispatch, useAppSelector} from "../../../app/hooks.ts";
import {cardQuestionParams, pageCountParams, pageParams, sortPacksParams} from "../components/cards/cardSelectors.ts";
import {getCards, packCardsActions} from "../components/cards/pack-cardSlice.ts";

export const useFetchPack = () => {
    const pageParam = useAppSelector(pageParams)
    const pageCountParam = useAppSelector(pageCountParams)
    const searchValue = useAppSelector(cardQuestionParams)
    const onSortCardsTable = useAppSelector(sortPacksParams)

    const dispatch = useAppDispatch()
    const { packId } = useParams<{ packId: string }>()

    useEffect(() => {
        dispatch(getCards({ cardsPack_id: packId as string }))
    }, [searchValue, pageParam, pageCountParam, onSortCardsTable])

    useEffect(() => {
        dispatch(packCardsActions.setQueryParams({ cardsPack_id: packId as string }))

        return () => {
            dispatch(packCardsActions.resetCardData())
        }
    }, [])
}
