import {CardsPackTable} from "../cardsPackTable/CardsPackTable.tsx";
import {ImageCard} from "../ImageWithCard/ImageCard.tsx";
import {useAppSelector} from "../../../../app/hooks.ts";

export const Cards = () => {

    const cardImage = useAppSelector(state => state.packCardsReducer.packCards.packDeckCover)

    return (
        <div>
            <ImageCard deckCover={cardImage} width={'150px'} height={'150px'}/>
            <CardsPackTable/>
        </div>
    )
};
