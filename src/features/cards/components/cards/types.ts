
export type CardItemType = {
    answer: string
    question: string
    cardsPack_id: string
    questionImg: string
    answerImg: string
    grade: number
    shots: number
    user_id: string
    created: string
    updated: string
    _id: string
}


export type CardsResponseType = {
    cardPacks:CardItemType[]
    packName: string
    cardsTotalCount: number
    maxGrade: number
    minGrade: number
    page: number
    pageCount: number
    packUserId: string
    packDeckCover: string
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
