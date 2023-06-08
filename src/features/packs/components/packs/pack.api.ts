import { instanceHeroku} from "../../../../common/api/api.ts";
import {PacksResponseType, QueryParams} from "./types.ts";


export const packAPI = {
    getPacks(params: Partial<QueryParams> = {}) {
        return instanceHeroku.get<PacksResponseType>("/cards/pack",{
            params,
        })
    }
}