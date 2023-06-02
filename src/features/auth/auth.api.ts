import {AxiosResponse} from "axios";
import {instanceHeroku} from "../../common/api/api.ts";

export const authApi = {
    register: (data: RegisterAuthType) => {
        return instanceHeroku.post('auth/register', data)
    },
    me:() => {
      return instanceHeroku.post<ProfileType>('auth/me')
    },
    logout:() => {
      return instanceHeroku.delete<ResponseInfoType>("/auth/me")
    },
    login: (data: LoginAuthType) => {
        return instanceHeroku.post<ProfileType, AxiosResponse<ProfileType>, LoginAuthType>("/auth/login", data)
    },
    forgot(data: ForgotEmailDataType) {
        return instanceHeroku.post<ResponseInfoType>('auth/forgot', data)
    },
    setNewPassword(data: NewPasswordDataType) {
        return instanceHeroku.post<ResponseInfoType>('auth/set-new-password', data)
    },
}

export type RegisterAuthType = Omit<LoginAuthType, 'rememberMe'>

export type LoginAuthType = {
    email: string,
    password: string,
    rememberMe: boolean,
}
export type ProfileType = {
    _id: string;
    email: string;
    name: string;
    avatar?: string;
    publicCardPacksCount: number;
// количество колод

    created: Date;
    updated: Date;
    isAdmin: boolean;
    verified: boolean; // подтвердил ли почту
    rememberMe: boolean;

    error?: string;
}
export type ResponseInfoType = {
    info: string
    error: string
}

export type ForgotEmailDataType ={
    email: string, // кому восстанавливать пароль
    from: string,
    message: string
}
export type NewPasswordDataType={
    password:string
    resetPasswordToken: string | undefined
}