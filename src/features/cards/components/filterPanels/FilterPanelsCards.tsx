import {useAppSelector} from "../../../../app/hooks.ts";
import {Filters} from "../../../../common/components/Filters/Filters.tsx";
import {InputSearch} from "../../../../common/components/InputSearch/InputSearch.tsx";
import {SubHeader} from "../../../../common/components/SubHeader/SubHeader.tsx";
import {useModals} from "../../../modals/hooks/useModals.ts";
import {useCardsFilter} from "../../hooks/useCardsFilter.ts";
import {useCardsPack} from "../../hooks/useCardsPack.ts";
import {ImageCard} from "../ImageWithCard/ImageCard.tsx";


export const FilterPanelsCards = () => {
    const cardImage = useAppSelector(state => state.packCardsReducer.packCards.packDeckCover)
    const { isMe, cardName, learnToPack, status, totalCount } = useCardsPack()
    const { showModal } = useModals()

    const {searchValue, onSearchChange} = useCardsFilter()
    return (
        <Filters>
            <SubHeader
                disabled={status === 'loading' || (!isMe && !totalCount)}
                isLoading={status === 'loading'}
                title={cardName}
                titleButton={isMe ? 'Add new card' : 'Learn to pack'}
                onClick={isMe ? showModal('add', {}) : learnToPack}
            />
            <ImageCard deckCover={cardImage} width={'150px'} height={'150px'}/>
            <InputSearch onChangeValue={onSearchChange} searchValue={searchValue}/>
        </Filters>
    )
}
