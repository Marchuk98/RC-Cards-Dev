import {CustomPagination} from "../../../../common/components/pagination/Pagination.tsx";
import {useCardsFilter} from "../../hooks/useCardsFilter.ts";
import {useCardsPack} from "../../hooks/useCardsPack.ts";


export const PanelsCards = () => {

    const {pageParams,pageCount,totalCount,onChangePagination,onChangePageCount} = useCardsFilter()
    const {status} = useCardsPack()
    return(
        <CustomPagination
            page={pageParams}
            rows={pageCount}
            count={totalCount}
            disabled={status === 'loading'}
            onChange={onChangePagination}
            onChangePageCount={onChangePageCount}/>
    )
}