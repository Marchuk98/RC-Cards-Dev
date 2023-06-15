import {CustomPagination} from '../../../../common/components/pagination/Pagination.tsx';
import {useAppDispatch, useAppSelector} from '../../../../app/hooks.ts';
import {useCallback} from 'react';
import {packActions} from '../packs/pack-listSlice.ts';

export const Panels = () => {
    const pageParam = useAppSelector((state) => state.packListReducer.queryParams.page);
    const pageCountParam = useAppSelector((state) => state.packListReducer.queryParams.pageCount);
    const cardsTotalCount = useAppSelector((state) => state.packListReducer.packList.cardPacksTotalCount);
    const status = useAppSelector((state) => state.appReducer.status);
    const dispatch = useAppDispatch();

    const onChangePagination = useCallback(
        (page: number) => {
            dispatch(packActions.setQueryParams({page}));
        },
        [dispatch]
    );

    const onChangePageCount = useCallback(
        (pageCount: number) => {
            dispatch(packActions.setQueryParams({pageCount}));
        },
        [dispatch]
    );


    return (
        <CustomPagination
            page={pageParam}
            rows={pageCountParam}
            count={cardsTotalCount}
            disabled={status === 'loading'}
            onChange={onChangePagination}
            onChangePageCount={onChangePageCount}
        />
    );
};