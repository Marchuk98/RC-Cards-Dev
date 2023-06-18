import {instanceHeroku} from "../../common/api/api.ts";
import {UpdateGradeRequestType, UpdateGradeResponseType} from "../cards/components/cards/types.ts";

export const learnAPI = {
    updateGrade(data: UpdateGradeRequestType) {
        return instanceHeroku.put<UpdateGradeResponseType>('cards/grade', data)
    },
}
