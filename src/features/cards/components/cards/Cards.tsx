import {CardsPackTable} from "../cardsPackTable/CardsPackTable.tsx";
import {ImageCard} from "../ImageWithCard/ImageCard.tsx";
import {useAppSelector} from "../../../../app/hooks.ts";
import {useFetchCard} from "../../hooks/useFetchCard.ts";
import {PanelsCards} from "../panels/PanelsCards.tsx";

export const Cards = () => {

    const cardImage = useAppSelector(state => state.packCardsReducer.packCards.packDeckCover)

    useFetchCard()

    return (
        <div>
            <ImageCard deckCover={cardImage} width={'150px'} height={'150px'}/>
            <CardsPackTable/>
            <PanelsCards/>
        </div>
    )
};
