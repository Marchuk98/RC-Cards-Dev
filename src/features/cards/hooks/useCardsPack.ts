import {useNavigate, useParams} from "react-router-dom";
import {useAppSelector} from "../../../app/hooks.ts";
import {useProfile} from "../../../app/hooks/useProfile/useProfile.ts";
import {packCardPacksName} from "../components/cards/cardSelectors.ts";
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

    const {_id} = useProfile()
    const isMe = cardUserId === _id
    const navigate = useNavigate()
    const {packId} = useParams<{ packId: string }>()
    const navigateToLearn = (packId: string | undefined) => navigate(`/packs-item/learn/${packId}`)
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
        cover
    }
}
