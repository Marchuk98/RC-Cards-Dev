import { useEffect } from 'react'
import {useAppDispatch, useAppSelector} from "../../../app/hooks.ts";
import {getRandomCard} from "../../../common/utils/get-random-card.ts";
import {cardStatus} from "../../cards/components/cards/cardSelectors.ts";
import {learnActions} from "../learn-slice.ts";
import {learnCards} from "../learnSelectors.ts";


export const useRandomCard = () => {
    const packCards = useAppSelector(learnCards)
    const status = useAppSelector(cardStatus)


    const dispatch = useAppDispatch()

    useEffect(() => {
        if (packCards.length > 0 && status === 'succeeded') {
            dispatch(learnActions.setCard({card: getRandomCard(packCards)}))
        }
    }, [dispatch, status])
}
