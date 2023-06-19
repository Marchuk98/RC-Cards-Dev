import {useCallback} from "react";
import {useNavigate, useParams} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../../app/hooks.ts";
import {useProfile} from "../../../app/hooks/useProfile/useProfile.ts";
import {packCardPacksName} from "../components/cards/cardSelectors.ts";
import {addCard, deleteCard, updateCard} from "../components/cards/pack-cardSlice.ts";
import {
    cardPackCardItem,
    cardPackUserId,
    cardPageCount,
    cardStatus,
    cardsTotalCount, packDeckCover
} from "../components/cards/selectors.ts";


export const useCardsPack = () => {

    const cardPacks = useAppSelector(cardPackCardItem)
    const pageCount = useAppSelector(cardPageCount)
    const status = useAppSelector(cardStatus)
    const cardUserId = useAppSelector(cardPackUserId)
    const cardName = useAppSelector(packCardPacksName)
    const totalCount = useAppSelector(cardsTotalCount)
    const cover = useAppSelector(packDeckCover)

    const dispatch = useAppDispatch()
    const {_id} = useProfile()
    const isMe = cardUserId === _id
    const navigate = useNavigate()
    const {packId} = useParams<{ packId: string }>()
    const navigateToLearn = (packId: string | undefined) => navigate(`/packs-item/learn/${packId}`)

    const addNewCard = useCallback((questionImg?: string, answerImg?: string) => {
        return (data: any) => {
            dispatch(
                addCard({
                    card: {
                        cardsPack_id: packId as string,
                        answerImg,
                        questionImg,
                        answer: data.answer || undefined,
                        question: data.question || undefined,
                    },
                })
            )
        }
    }, [])

    const removeCard = useCallback((id: string) => {
        return () => dispatch(deleteCard(id))
    }, [])

    const updateCurrentCard = useCallback((id: string, answerImg?: string, questionImg?: string) => {
        return (data: any) =>
            dispatch(
                updateCard({
                    card: {
                        _id: id,
                        answerImg,
                        questionImg,
                        answer: data.answer || undefined,
                        question: data.question || undefined,
                    },
                })
            )
    }, [])

    const learnToPack = () => {
        navigateToLearn(packId)
    }
    return {
        cardPacks,
        pageCount,
        status,
        cardUserId,
        isMe,
        cardName,
        learnToPack,
        totalCount,
        cover,
        addNewCard,
        removeCard,
        updateCurrentCard
    }
}
