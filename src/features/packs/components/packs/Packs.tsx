import {useEffect} from "react";
import {InputSearch} from "../../../../common/components/InputSearch/InputSearch.tsx";
import {PackTable} from "../packTable/PackTable.tsx";
import {Panels} from "../panels/Panels.tsx";
import {useAppDispatch, useAppSelector} from "../../../../app/hooks.ts";
import {getPacks, packActions} from "./pack-listSlice.ts";
import {useParams} from "react-router-dom";


export const Packs = () => {
  const packName = useAppSelector(state => state.packListReducer.queryParams.packName)
  const pageParam = useAppSelector(state => state.packListReducer.queryParams.page)
  const pageCountParam = useAppSelector(state => state.packListReducer.queryParams.pageCount)
  const dispatch = useAppDispatch()

  const { packId } = useParams<{ packId: string }>()
  useEffect(()=> {
    dispatch(getPacks({ cardsPack_id: packId as string }))
  },[pageParam,pageCountParam])

  useEffect(() => {
    dispatch(packActions.setQueryParams({cardsPack_id: packId as string}))
  },[packId,dispatch])

  const onSearchChange = (search: string) => {
    dispatch(packListActions.setQueryParams({ packName: search }))
  }
  useEffect(() => {
    dispatch(getPacks())
  }, [packName])

  return (
 <div>
    <InputSearch onChangeValue={onSearchChange} searchValue={packName} />
    <PackTable/>
    <Panels/>
 </div>
)
};
