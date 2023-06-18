import {useAppDispatch, useAppSelector} from "../../../app/hooks.ts";
import {addedModalVisible, deleteModalVisible, editModalVisible, modalData} from "../selectors.ts";
import {useCallback} from "react";
import {ModalDataType} from "../types.ts";
import {modalsActions} from "../modals.slice.ts";



type ShowModalType = 'add' | 'edit' | 'delete'

export const useModals = () => {
    const data = useAppSelector(modalData)
    const isAddedModalVisible = useAppSelector(addedModalVisible)
    const isEditModalVisible = useAppSelector(editModalVisible)
    const isDeleteModalVisible = useAppSelector(deleteModalVisible)

    const dispatch = useAppDispatch()

    const showModal = useCallback((type: ShowModalType, data: Partial<ModalDataType>) => {
        return () => {
            switch (type) {
                case 'edit': {
                    dispatch(modalsActions.setModalData(data))
                    dispatch(modalsActions.toggleModal({ isEditModalVisible: true }))

                    return
                }
                case 'add': {
                    dispatch(modalsActions.setModalData(data))
                    dispatch(modalsActions.toggleModal({ isAddedModalVisible: true }))

                    return
                }
                case 'delete': {
                    dispatch(modalsActions.setModalData(data))
                    dispatch(modalsActions.toggleModal({ isDeleteModalVisible: true }))

                    return
                }
            }
        }
    }, [])

    const setDeckCover = (file64: string) => {
        dispatch(modalsActions.setModalData({ deckCover: file64 }))
    }

    const setQuestionImg = useCallback((file64: string) => {
        dispatch(modalsActions.setModalData({ questionImg: file64 }))
    }, [])

    const setAnswerImg = useCallback((file64: string) => {
        dispatch(modalsActions.setModalData({ answerImg: file64 }))
    }, [])

    const removeImages = useCallback(
        (data: { isAnswer?: boolean; isQuestion?: boolean; isDeckCover?: boolean }) => {
            return () => {
                data.isAnswer && dispatch(modalsActions.setModalData({ answerImg: '' }))

                data.isQuestion && dispatch(modalsActions.setModalData({ questionImg: '' }))

                data.isDeckCover && dispatch(modalsActions.setModalData({ deckCover: '' }))
            }
        },
        [data.deckCover]
    )

    const closeModal = useCallback(() => {
        dispatch(modalsActions.resetModalData())
    }, [])

    return{
        data,
        isAddedModalVisible,
        isEditModalVisible,
        isDeleteModalVisible,
        setDeckCover,
        setQuestionImg,
        setAnswerImg,
        removeImages,
        showModal,
        closeModal,
    }
}