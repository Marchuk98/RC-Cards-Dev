import {memo} from "react";
import {UseFormRegister} from "react-hook-form";
import TextField from "@mui/material/TextField";

type InputWithValueType = {
    name: string
    value: string
    label?: string
    register: UseFormRegister<any>
}

export const InputWithValue = memo(({ name, value, label, register }:InputWithValueType) => {
    return (
        <TextField
            {...register(name, { value: value })}
            variant={'standard'}
            label={label}
            sx={{ width: '100%', marginBottom: '30px' }}
        />
    )
})