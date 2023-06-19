import {DeleteModal} from "../../../../common/components/Modal/DeleteModal/DeleteModal.tsx";
import {useModals} from "../../../modals/hooks/useModals.ts";
import {usePackList} from "../../hooks/usePackList.ts";
import {PackListCommonModal} from "./PackCommonModal.tsx";


export const Modals = () => {

    const {
        isAddedModalVisible,
        isEditModalVisible,
        isDeleteModalVisible,
        closeModal,
        data: {_id, name, question, deckCover}
    } = useModals()

    const {addNewPack, editPack, removePack, status} = usePackList()

    return (
        <>
            <DeleteModal
                open={isDeleteModalVisible}
                modalTitle={'Do you want to remove'}
                handleClose={closeModal}
                disabled={status === 'loading'}
                entityTitle={'Pack'}
                entityName={name || question}
                callBack={removePack(_id)}
            />
            <PackListCommonModal
                open={isAddedModalVisible}
                title={'Add Pack'}
                status={status === 'loading'}
                callback={addNewPack(deckCover)}
            />
            <PackListCommonModal
                open={isEditModalVisible}
                title={'Edit Pack'}
                status={status === 'loading'}
                callback={editPack(_id, deckCover)}
            />
        </>
    )
}