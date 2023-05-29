import {AxiosResponse} from "axios";
import {instance} from "../../common/api/api.ts";

export const authApi = {
    register: (data: RegisterAuthType) => {
        return instance.post('auth/register', data)
    },
    login: (data: LoginAuthType) => {
        return instance.post<ProfileType, AxiosResponse<ProfileType>, LoginAuthType>("auth/login", data)
    }
}

type RegisterAuthType = Omit<LoginAuthType, 'rememberMe'>

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