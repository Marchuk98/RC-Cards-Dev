import {useAppDispatch} from "../../../app/hooks.ts";
import {useCallback} from "react";
import {packActions} from "../components/packs/pack-listSlice.ts";


export const useFilters = () => {

    const dispatch = useAppDispatch()

    const sortTableByHeader = useCallback((sortHeaderData:string) => {

    dispatch(packActions.setQueryParams({sortPacks:sortHeaderData}))
    },[])

    return{
     sortTableByHeader
    }
}