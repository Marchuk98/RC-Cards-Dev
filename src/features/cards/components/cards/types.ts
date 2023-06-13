
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
