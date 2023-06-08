import {PackTable} from "../packTable/PackTable.tsx";
import {Panels} from "../panels/Panels.tsx";
import {useAppDispatch, useAppSelector} from "../../../../app/hooks.ts";
import {useEffect} from "react";
import {getPacks, packActions} from "./pack-listSlice.ts";
import {useParams} from "react-router-dom";


export const Packs = () => {

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

  return (
 <div>
    <PackTable/>
    <Panels/>
 </div>
)
};
