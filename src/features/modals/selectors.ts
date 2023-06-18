import {RootState} from "../../app/store.ts";


const deleteModalVisible = (state: RootState) => state.modalsReducer.modalState.isDeleteModalVisible
const editModalVisible = (state: RootState) => state.modalsReducer.modalState.isEditModalVisible
const addedModalVisible = (state: RootState) => state.modalsReducer.modalState.isAddedModalVisible
const modalData = (state: RootState) => state.modalsReducer.modalData

export {
    addedModalVisible,
    editModalVisible,
    deleteModalVisible,
    modalData
}