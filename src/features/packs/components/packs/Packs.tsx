import {FilterPanels} from "../FilterPanels/FilterPanels.tsx";
import {PackTable} from '../packTable/PackTable.tsx';
import {Panels} from "../panels/Panels.tsx";


export const Packs = () => {
    /*const pageParam = useAppSelector(pageParamParams)
    const pageCountParam = useAppSelector(pageCountParams)
    const dispatch = useAppDispatch()

    const packName = useAppSelector(packNameParams);
    // const {packId} = useParams<{ packId: string }>()

    // useEffect(() => {
    //     dispatch(packActions.setQueryParams({cardsPack_id: packId as string}))
    // }, [packId, dispatch])

    const onSearchChange = (search: string) => {
        dispatch(packActions.setQueryParams({packName: search}));
    };*/

    return (
        <div>
            <FilterPanels/>
            <PackTable/>
            <Panels/>
        </div>
    )
};