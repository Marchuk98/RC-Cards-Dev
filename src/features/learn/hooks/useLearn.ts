import {useCallback} from 'react'
import {useAppDispatch, useAppSelector} from "../../../app/hooks.ts";
import {UpdateGradeRequestType} from "../../cards/components/cards/types.ts";
import {updateGrade} from "../learn-slice.ts";
import {learnCard} from "../learnSelectors.ts";


export const useLearn = () => {
    const card = useAppSelector(learnCard)
    const dispatch = useAppDispatch()

    const onSubmit = useCallback((data: UpdateGradeRequestType) => {
        dispatch(updateGrade({ grade: Number(data.grade), card_id: card._id }))
    }, [])

    return { card, onSubmit }
}
