import { useEffect } from 'react'
import {useAppDispatch, useAppSelector} from "../../../app/hooks.ts";
import {getRandomCard} from "../../../common/utils/get-random-card.ts";
import {learnActions} from "../learn-slice.ts";
import {learnCards} from "../learnSelectors.ts";


export const useRandomCard = () => {
    const packCards = useAppSelector(learnCards)
    const dispatch = useAppDispatch()

    useEffect(() => {
            dispatch(learnActions.setCard({card: getRandomCard(packCards)}))
    }, [dispatch])
}
