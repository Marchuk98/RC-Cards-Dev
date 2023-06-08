import {useEffect} from "react";
import {InputSearch} from "../../../../common/components/InputSearch/InputSearch.tsx";
import {packNameParams, pageCountParams, pageParamParams} from "../../selectors.ts";
import {PackTable} from "../packTable/PackTable.tsx";
import {Panels} from "../panels/Panels.tsx";
import {useAppDispatch, useAppSelector} from "../../../../app/hooks.ts";
import {getPacks, packActions} from "./pack-listSlice.ts";
import {useParams} from "react-router-dom";


export const Packs = () => {
  const packName = useAppSelector(packNameParams)
  const pageParam = useAppSelector(pageParamParams)
  const pageCountParam = useAppSelector(pageCountParams)
  const dispatch = useAppDispatch()

  const { packId } = useParams<{ packId: string }>()
  useEffect(()=> {
    dispatch(getPacks({ cardsPack_id: packId as string }))
  },[pageCountParam, packName])

  useEffect(() => {
    dispatch(packActions.setQueryParams({cardsPack_id: packId as string}))
  },[packId,dispatch])

  const onSearchChange = (search: string) => {
    dispatch(packActions.setQueryParams({ packName: search }))
  }/*
  useEffect(() => {
    dispatch(getPacks())
  }, [packName])
*/
  return (
 <div>
    <InputSearch onChangeValue={onSearchChange} searchValue={packName} />
    <PackTable/>
    <Panels/>
 </div>
)
};
