import {AddCardRequestType, CardQueryParams, CardsResponseType, UpdateCardRequestType} from "./types.ts";
import { instanceHeroku} from "../../../../common/api/api.ts";


export const packCardsApi = {
    getCards(params:Partial<CardQueryParams> = {}) {
        return instanceHeroku.get<CardsResponseType>("cards/card",{
            params,
        })
    },
    addCard(data: AddCardRequestType) {
        return instanceHeroku.post<'', AddCardRequestType>('cards/card', data)
    },
    deleteCard(id: string) {
        return instanceHeroku.delete(`cards/card/?id=${id}`)
    },
    updateCard(data: UpdateCardRequestType) {
        return instanceHeroku.put<'', UpdateCardRequestType>('cards/card', data)
    },
}