import { instanceHeroku} from "../../../../common/api/api.ts";
import {AddPackRequestType, AddPackType, PacksResponseType, QueryParams} from "./types.ts";


export const packAPI = {
    getPacks(params: Partial<QueryParams> = {}) {
        return instanceHeroku.get<PacksResponseType>("cards/pack",{
            params,
        })
    },
    addPack(data: AddPackRequestType) {
        return instanceHeroku.post<AddPackType>('cards/pack', data)
    },
}

