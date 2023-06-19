import {DeleteModal} from "../../../../common/components/Modal/DeleteModal/DeleteModal.tsx";
import {useModals} from "../../../modals/hooks/useModals.ts";
import {useCardsPack} from "../../hooks/useCardsPack.ts";
import {CommonModal} from "./CardCommonModal.tsx";


export const Modals = () => {
    const {
        isEditModalVisible,
        isAddedModalVisible,
        isDeleteModalVisible,
        closeModal,
        data: { _id, question, questionImg, answerImg },
    } = useModals()
    const { removeCard, updateCurrentCard, addNewCard, status } = useCardsPack()

    return (
        <>
            <DeleteModal
                disabled={status === 'loading'}
                modalTitle={'Do you really want to remove'}
                entityTitle={'Card'}
                entityName={question}
                open={isDeleteModalVisible}
                callBack={removeCard(_id)}
                handleClose={closeModal}
            />
            <CommonModal
                title={'Add new card'}
                open={isAddedModalVisible}
                answerImg={answerImg}
                questionImg={questionImg}
                disabled={status === 'loading'}
                callback={addNewCard(questionImg, answerImg)}
            />
            <CommonModal
                title={'Edit card'}
                open={isEditModalVisible}
                answerImg={answerImg}
                questionImg={questionImg}
                disabled={status === 'loading'}
                callback={updateCurrentCard(_id, questionImg, answerImg)}
            />
        </>
    )
}
