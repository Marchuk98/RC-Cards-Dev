import {useEffect} from "react";
import {useParams} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../../../app/hooks.ts";
import {pageCountParams, pageParamParams} from "../../selectors.ts";
import {FilterPanels} from "../FilterPanels/FilterPanels.tsx";
import {PackTable} from "../packTable/PackTable.tsx";
import {Panels} from "../panels/Panels.tsx";
import {getPacks, packActions} from "./pack-listSlice.ts";


export const Packs = () => {
    const pageParam = useAppSelector(pageParamParams)
    const pageCountParam = useAppSelector(pageCountParams)

    const dispatch = useAppDispatch()

    const {packId} = useParams<{ packId: string }>()
    useEffect(() => {
        dispatch(getPacks())
    }, [pageCountParam])

    useEffect(() => {
        dispatch(packActions.setQueryParams({cardsPack_id: packId as string}))
    }, [packId, dispatch])


    /*
  useEffect(() => {
    dispatch(getPacks())
  }, [packName])
*/
    return (
        <div>
            <FilterPanels/>
            <PackTable/>
            <Panels/>
        </div>
    )
};
