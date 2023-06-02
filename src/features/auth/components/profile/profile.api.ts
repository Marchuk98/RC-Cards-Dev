import {instance} from "../../../../common/api/api.ts";
import {ProfileType} from "../../auth.api.ts";


export const profileApi = {
    changeUserData(payload:UserData){
        return instance.put<UpdateProfileType>('auth/me',payload)
    }
}

export type UserData = {
    name?:string
    avatar?: string
}

export type UpdateProfileType = {
    updatedUser: ProfileType
    error?:string
}

export type ProfileStateType = {
    profile:ProfileType
}

export type ProfileDataType = {
    title?:string
    avatar?:string
}