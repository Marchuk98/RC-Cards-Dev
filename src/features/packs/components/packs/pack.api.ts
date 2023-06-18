import { instanceHeroku} from "../../../../common/api/api.ts";
import {
    AddPackRequestType,
    AddPackType, DeleteResponseType,
    PacksResponseType,
    QueryParams,
    UpdatePackRequestType,
    UpdateResponseType
} from "./types.ts";


export const packAPI = {
    getPacks(params: Partial<QueryParams> = {}) {
        return instanceHeroku.get<PacksResponseType>("cards/pack",{
            params,
        })
    },
    addPack(data: AddPackRequestType) {
        return instanceHeroku.post<AddPackType>('cards/pack', data)
    },
    updatePack(data:UpdatePackRequestType) {
        return instanceHeroku.put<UpdateResponseType>('/cards/pack', data)
    },
    deletePack(id:string){
      return instanceHeroku.delete<DeleteResponseType>(`/cards/pack?id=${id}`)
    }
}

