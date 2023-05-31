import axios, {AxiosResponse} from "axios";
import {instance} from "../../common/api/api.ts";

export const authApi = {
    register: (data: RegisterAuthType) => {
        return axios.post('https://neko-back.herokuapp.com/2.0/auth/register', data, {withCredentials: true})
    },
    logout:() => {
      return instance.delete<ResponseInfoType>("/auth/me")
    },
    login: (data: LoginAuthType) => {
        return instance.post<ProfileType, AxiosResponse<ProfileType>, LoginAuthType>("auth/login", data)
    },
    forgot(data: ForgotEmailDataType) {
        return axios.post<ResponseInfoType>('https://neko-back.herokuapp.com/2.0/auth/forgot', data, {withCredentials:true})
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