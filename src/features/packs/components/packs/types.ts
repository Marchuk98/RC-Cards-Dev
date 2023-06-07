
export type PackItemType = {
    "_id": string
    "user_id": string
    "user_name": string
    "name": string
    "private": boolean
    "path": string
    "grade": number
    "shots": number
    "cardsCount": number
    deckCover: string
    "type": 'pack'
    "rating": number
    "more_id": string
    "created": string
    "updated": string
    "__v": number
}


export type PacksResponseType = {
    cardPacks:PackItemType[]
    cardPacksTotalCount: number
    maxCardsCount: number
    minCardsCount: number
    page: number
    pageCount: number
}

export type QueryParams = {
    packName: string
    min: number
    max: number
    sortPacks: string
    page: number
    pageCount: number
    user_id: string
    block: boolean
}