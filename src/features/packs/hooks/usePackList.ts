import {useAppDispatch, useAppSelector} from "../../../app/hooks.ts";
import {
    packCardItem,
    packListStatus,
    pageCountParams,
} from "../components/packs/selectors.ts";
import {useNavigate} from "react-router-dom";
import {addPack, deletePack, updatePack} from "../components/packs/pack-listSlice.ts";
import {AddPackType, UpdatePackType} from "../components/packs/types.ts";


export const usePackList = () => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const pageCount = useAppSelector(pageCountParams)
    const status = useAppSelector(packListStatus)
    const cardPacks = useAppSelector(packCardItem)

    const navigateToCards = (id: string) => {
        return () => navigate(`/packs-cards/${id}`)
    }

    const editPack = (id: string, deckCover: string) => {
        return (data: Omit<UpdatePackType, '_id'>) => {
            dispatch(
                updatePack({
                    cardsPack: { ...data, _id: id, deckCover: deckCover },
                })
            )
        }
    }
    const addNewPack = (deckCover: string) => {
        return (data: AddPackType) => {
            dispatch(
                addPack({
                    cardsPack: { ...data, deckCover },
                })
            )
        }
    }
    const removePack = (id: string) => {
        return () => dispatch(deletePack(id))
    }
    return{
        pageCount,
        status,
        cardPacks,
        editPack,
        addNewPack,
        removePack,
        navigateToCards
    }
}