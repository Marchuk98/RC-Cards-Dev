import React from 'react';
import { useForm } from 'react-hook-form';
import { TextField, Button } from '@mui/material';
import {useAppDispatch} from "../../../../app/hooks.ts";
import {authThunks} from "../../auth.slice.ts";


type RegistrationFormData = {
    email: string;
    password: string;
    confirmPassword: string;
}

export const Register: React.FC = () => {
    const dispatch = useAppDispatch()
    const { register, handleSubmit, formState: { errors }, getValues  } = useForm<RegistrationFormData>();

    const onSubmit = (data: RegistrationFormData) => {
        const { email, password } = data;
        const requestData = {
            email: email,
            password: password,
        };
        dispatch(authThunks.registerUser(requestData));
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <TextField
                    label="Email"
                    {...register('email', { required: 'Email is required', pattern: { value: /^\S+@\S+$/i, message: 'Invalid email' } })}
                    error={!!errors.email}
                    helperText={errors.email?.message}
                />
            </div>

            <div>
                <TextField
                    label="Password"
                    type="password"
                    {...register('password', { required: 'Password is required' })}
                    error={!!errors.password}
                    helperText={errors.password?.message}
                />
            </div>

            <div>
                <TextField
                    label="Confirm Password"
                    type="password"
                    {...register('confirmPassword', {
                        required: 'Please confirm your password',
                        validate: value => value === getValues('password') || 'Passwords do not match'
                    })}
                    error={!!errors.confirmPassword}
                    helperText={errors.confirmPassword?.message}
                />
            </div>

            <Button type="submit" variant="contained" color="primary">Submit</Button>
        </form>
    );
};