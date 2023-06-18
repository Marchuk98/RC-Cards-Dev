import {useAppDispatch, useAppSelector} from "../../../app/hooks.ts";
import {packSortParam, pageCountParams, pageParamParams} from "../components/packs/selectors.ts";
import {useEffect} from "react";
import {getPacks} from "../components/packs/pack-listSlice.ts";

export const UseFetchPacks = () => {

    const pageParams = useAppSelector(pageParamParams)
    const pageCount = useAppSelector(pageCountParams)
    const sortPacks = useAppSelector(packSortParam)

    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(getPacks())
    }, [pageParams, pageCount,sortPacks])
}