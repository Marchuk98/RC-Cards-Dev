import {NavigateToBack} from "../../../../common/components/NavigateToBack/NavigateToBack.tsx";
import {useFetchCard} from "../../hooks/useFetchCard.ts";
import {CardsPackTable} from "../cardsPackTable/CardsPackTable.tsx";
import {FilterPanelsCards} from "../filterPanels/FilterPanelsCards.tsx";
import {Modals} from "../modals/Modals.tsx";
import {PanelsCards} from "../panels/PanelsCards.tsx";

export const Cards = () => {


    useFetchCard()

    return (
        <div>
            <NavigateToBack />
            <FilterPanelsCards/>
            <CardsPackTable/>
            <PanelsCards/>
            <Modals/>
        </div>
    )
};
