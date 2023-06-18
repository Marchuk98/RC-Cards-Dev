import {useForm} from "react-hook-form";
import {createValidationSchema} from "../../utils/createValidationSchema.ts";
import {yupResolver} from "@hookform/resolvers/yup";



export type FormValidateType = {
    email: string
    password: string
    confPassword?: string
    rememberMe?: boolean
    name: string
    private?: boolean
    question: string
    answer: string
    deckCover?: string
}

export const useScheme = (keys: string[]) => {
    const {
        register,
        handleSubmit,
        reset,
        getValues,
        formState: { errors },
    } = useForm<FormValidateType>({
        resolver: yupResolver(createValidationSchema(keys)),
        mode: 'onSubmit',
    })

    const emailError = errors.email && errors.email.message
    const passwordError = errors.password && errors.password.message
    const confPasswordError = errors.confPassword && errors.confPassword.message
    const nameError = errors.name && errors.name.message

    return {
        errorsMessages: {
            nameError,
            emailError,
            passwordError,
            confPasswordError,
        },
        register,
        handleSubmit,
        reset,
        getValues,
    }
}