import {useAppSelector} from "../../../app/hooks.ts";
import {useProfile} from "../../../app/hooks/useProfile/useProfile.ts";
import {cardPackCardItem, cardPackUserId, cardPageCount, cardStatus} from "../components/cards/selectors.ts";


export const useCardsPack = () => {

    const cardPacks = useAppSelector(cardPackCardItem)
    const pageCount = useAppSelector(cardPageCount)
    const status = useAppSelector(cardStatus)
    const {_id} = useProfile()
    const cardUserId = useAppSelector(cardPackUserId)
    const isMe = cardUserId === _id

    return {
        cardPacks,
        pageCount,
        status,
        cardUserId,
        isMe
    }
}
