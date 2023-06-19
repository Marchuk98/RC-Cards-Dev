
export type CardItemType = {
    _id: string
    answer: string
    question: string
    questionImg: string
    answerImg: string
    grade: number
    shots: number
    user_id: string
    created: string
    updated: string
    cardsPack_id: string
}


export type CardsResponseType = {
    cards: CardItemType[]
    cardsTotalCount: number
    maxGrade: number
    minGrade: number
    page: number
    packUpdated: string
    packCreated: string
    packDeckCover: string
    packPrivate: boolean
    pageCount: number
    packUserId: string
    packName: string
}

export type CardQueryParams = {
    cardQuestion: string
    cardAnswer: string
    cardsPack_id: string
    min: number
    max: number
    sortCards: string
    page: number
    pageCount: number
}
export type UpdateGradeRequestType = {
    grade: number
    card_id: string
}
export type UpdateGradeResponseType = {
    updatedGrade: {
        _id: string
        cardsPack_id: string
        card_id: string
        user_id: string
        grade: number
        shots: number
    }
}

export type AddCardRequestType = {
    card: AddCardType
}

export type AddCardType = {
    cardsPack_id: string
    question?: string
    answer?: string
    grade?: number
    shots?: number
    answerImg?: string
    questionImg?: string
    questionVideo?: string
    answerVideo?: string
}

export type UpdateCardType = {
    answer?: string
    grade?: number
    shots?: number
    answerImg?: string
    questionImg?: string
    questionVideo?: string
    answerVideo?: string
    _id: string
    question: string
}

export type UpdateCardRequestType = {
    card: UpdateCardType
}
