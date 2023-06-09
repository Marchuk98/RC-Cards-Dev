import {InputSearch} from '../../../../common/components/InputSearch/InputSearch.tsx';
import {packNameParams} from '../../selectors.ts';
import {PackTable} from '../packTable/PackTable.tsx';
import {Panels} from '../panels/Panels.tsx';
import {useAppDispatch, useAppSelector} from '../../../../app/hooks.ts';
import {packActions} from './pack-listSlice.ts';

export const Packs = () => {

    const packName = useAppSelector(packNameParams);
    const dispatch = useAppDispatch();

    // const { packId } = useParams<{ packId: string }>()
    //
    // useEffect(() => {
    //   dispatch(packActions.setQueryParams({cardsPack_id: packId as string}))
    // },[dispatch])

    const onSearchChange = (search: string) => {
        dispatch(packActions.setQueryParams({packName: search}));
    };

    return (
        <div>
            <InputSearch onChangeValue={onSearchChange} searchValue={packName}/>
            <PackTable/>
            <Panels/>
        </div>
    );
};