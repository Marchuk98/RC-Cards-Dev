export type ModalStateType = {
    isDeleteModalVisible: boolean
    isEditModalVisible: boolean
    isAddedModalVisible: boolean
}

export type ModalDataType = {
    _id: string
    name: string
    packName: string
    question: string
    answer: string
    deckCover: string
    answerImg: string
    questionImg: string
}