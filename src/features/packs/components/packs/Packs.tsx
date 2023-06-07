import {useEffect} from "react";
import {useAppDispatch, useAppSelector} from "../../../../app/hooks.ts";
import {InputSearch} from "../../../../common/components/InputSearch/InputSearch.tsx";
import {PackTable} from "../packTable/PackTable.tsx";
import {getPacks, packListActions} from "./pack-listSlice.ts";

export const Packs = () => {
  const dispatch = useAppDispatch()
  const packName = useAppSelector(state => state.packListReducer.queryParams.packName)
  const onSearchChange = (search: string) => {
    dispatch(packListActions.setQueryParams({ packName: search }))
  }
  useEffect(() => {
    dispatch(getPacks())
  }, [packName])
  return <div>
    <InputSearch onChangeValue={onSearchChange} searchValue={packName} />
    <PackTable/>
  </div>;
};
