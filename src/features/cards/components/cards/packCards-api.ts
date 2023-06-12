import {CardQueryParams} from "./types.ts";
import {instanceHeroku} from "../../../../common/api/api.ts";


export const packCardsApi = {
    getCards(params:Partial<CardQueryParams> = {}) {
        return instanceHeroku.get("cards/card",{
            params,
        })
    }
}