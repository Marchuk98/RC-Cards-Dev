import {useEffect} from "react";
import {toast} from "react-toastify";
// import {useParams} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../../../app/hooks.ts";
import {getProfile} from "../../../../app/selectors/selectors.ts";
import {ButtonsGroup} from "../../../../common/components/ButtonsGroup/ButtonsGroup.tsx";
import {CustomSlider} from "../../../../common/components/CustomSlider/CustomSlider.tsx";
import {Filters} from "../../../../common/components/Filters/Filters.tsx";
import {InputSearch} from "../../../../common/components/InputSearch/InputSearch.tsx";
import {Reset} from "../../../../common/components/ResetButton/Reset.tsx";
import {SubHeader} from "../../../../common/components/SubHeader/SubHeader.tsx";
import {useModals} from "../../../modals/hooks/useModals.ts";
import {getPacks, packActions} from "../packs/pack-listSlice.ts";
import {
    maxParams,
    minParams,
    packListMaxCardsCount,
    packListMinCardsCount,
    packListPage,
    packListPageCount,
    packListStatus,
    packNameParams,
    userIdParams
} from "../packs/selectors.ts";

export const FilterPanels = () => {
    const dispatch = useAppDispatch()
    // const {packId} = useParams<{ packId: string }>()
    const packName = useAppSelector(packNameParams)
    const minCardsCount = useAppSelector(packListMinCardsCount)
    const maxCardsCount = useAppSelector(packListMaxCardsCount)
    const min = useAppSelector(minParams)
    const max = useAppSelector(maxParams)
    const status = useAppSelector(packListStatus)
    const {_id:userId} = useAppSelector(getProfile)
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
        toast.warning("Filters reset")
    }
    const { showModal } = useModals()

    return (
        <Filters>
            <SubHeader
                isLoading={status === 'loading'}
                title={'Pack list'}
                titleButton={'Add new pack'}
                disabled={status === 'loading'}
                onClick={showModal('add', {})}
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