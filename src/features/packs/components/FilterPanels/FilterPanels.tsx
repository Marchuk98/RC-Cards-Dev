import {useEffect} from "react";
// import {useParams} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../../../app/hooks.ts";
import {ButtonsGroup} from "../../../../common/components/ButtonsGroup/ButtonsGroup.tsx";
import {CustomSlider} from "../../../../common/components/CustomSlider/CustomSlider.tsx";
import {Filters} from "../../../../common/components/Filters/Filters.tsx";
import {InputSearch} from "../../../../common/components/InputSearch/InputSearch.tsx";
import {Reset} from "../../../../common/components/ResetButton/Reset.tsx";
import {SubHeader} from "../../../../common/components/SubHeader/SubHeader.tsx";
import {
    maxParams,
    minParams,
    packListMaxCardsCount,
    packListMinCardsCount, packListPage, packListPageCount,
    packListStatus,
    packNameParams, userIdParams
} from "../../selectors.ts";
import {addPack, getPacks, packActions} from "../packs/pack-listSlice.ts";

export const FilterPanels = () => {
    const dispatch = useAppDispatch()
    // const {packId} = useParams<{ packId: string }>()
    const packName = useAppSelector(packNameParams)
    const minCardsCount = useAppSelector(packListMinCardsCount)
    const maxCardsCount = useAppSelector(packListMaxCardsCount)
    const min = useAppSelector(minParams)
    const max = useAppSelector(maxParams)
    const status = useAppSelector(packListStatus)
    const {_id: userId} = useAppSelector(state => state.profileReducer.profile)
    const pageCount = useAppSelector(packListPageCount)
    const page = useAppSelector(packListPage)
    const user_id = useAppSelector(userIdParams)
    useEffect(() => {
        dispatch(getPacks())
    }, [packName, max, min, user_id])
    const onSearchChange = (search: string) => {
        dispatch(packActions.setQueryParams({packName: search}))
    }
    const onChangeSliderValue = (_event: any, numbers: number[] | number) => {
        if (Array.isArray(numbers)) {
            dispatch(packActions.setQueryParams({ min: numbers[0], max: numbers[1] }))
        }
    }
    const getMyPacks = () => {
        dispatch(
            packActions.setQueryParams({ min, max, user_id: userId, page: page, pageCount: pageCount })
        )
    }
    const getAllPacks = () => {
        dispatch(packActions.setQueryParams({ user_id: '' }))
    }
    const onReset = () => {
        dispatch(packActions.resetQueryParams())
    }
    const onAddPack = () =>{
        dispatch(addPack({cardsPack: {name:"sdhglajdsf;"}}))
    }
    return (
        <Filters>
            <SubHeader
                title={'Pack list'}
                titleButton={'Add new pack'}
                disabled={status === 'loading'}
                onClick={onAddPack}
            />
            <InputSearch onChangeValue={onSearchChange} searchValue={packName}/>
            <ButtonsGroup
                disabled={status === 'loading'}
                onClickMy={getMyPacks}
                onClickAll={getAllPacks}
            />
            <CustomSlider
                disabled={status === 'loading'}
                minMax={[min, max]}
                onChangeCommitted={onChangeSliderValue}
                values={[minCardsCount, maxCardsCount]}
            />
            <Reset disabled={status === 'loading'} onIconClick={onReset} />
        </Filters>
    )
}