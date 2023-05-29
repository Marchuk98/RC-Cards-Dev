import {instance} from "../../common/api/api.ts";

export const authApi = {
    register: (data:RegisterAuthType) => {
        return instance.post('auth/register',data)
    }
}

type RegisterAuthType = Omit<LoginAuthType, 'rememberMe'>

type LoginAuthType = {
    email:string,
    password:string,
    rememberMe:string,
}