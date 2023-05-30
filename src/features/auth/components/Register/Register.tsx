import {useForm} from 'react-hook-form';
import {useAppDispatch} from "../../../../app/hooks.ts";
import {authThunks} from "../../auth.slice.ts";
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import {useNavigate} from "react-router-dom";



type RegistrationFormData = {
    email: string;
    password: string;
    confirmPassword: string;
}

const defaultTheme = createTheme({});

export const Register = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch()
    const {
        register,
        handleSubmit,
        formState: {errors},
        getValues
    } = useForm<RegistrationFormData>();

    const onSubmit = (data: RegistrationFormData) => {
        const {email, password} = data;
        const requestData = {
            email: email,
            password: password,
        };
        dispatch(authThunks.registerUser(requestData));
        navigate("/login")
    };

    return (
        <ThemeProvider theme={defaultTheme}>
            <Paper elevation={3} sx={{padding: "25px"}}>
                <Container component="main" maxWidth="xs">
                    <CssBaseline/>
                    <Box
                        sx={{
                            marginTop: 8,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Typography component="h1" variant="h3">
                            Sign up
                        </Typography>
                        <Box component="form" noValidate onSubmit={handleSubmit(onSubmit)} sx={{mt: 1}}>
                                    <TextField
                                        margin="normal"
                                        required
                                        fullWidth
                                        id="email"
                                        label="Email"
                                        autoComplete="email"
                                        {...register('email', {
                                            required: 'Email is required',
                                            pattern: {value: /^\S+@\S+$/i, message: 'Invalid email'}
                                        })}
                                        error={!!errors.email}
                                        helperText={errors.email?.message}
                                    />
                                    <TextField
                                        margin="normal"
                                        required
                                        fullWidth
                                        id="email"
                                        label="Password"
                                        type="password"
                                        autoComplete="current-password"
                                        {...register('password', {required: 'Password is required'})}
                                        error={!!errors.password}
                                        helperText={errors.password?.message}
                                    />
                                    <TextField
                                        margin="normal"
                                        required
                                        fullWidth
                                        id="email"
                                        label="Confirm Password"
                                        type="password"
                                        autoComplete="Confirm Password"
                                        {...register('confirmPassword', {
                                            required: 'Please confirm your password',
                                            validate: value => value === getValues('password') || 'Passwords do not match'
                                        })}
                                        error={!!errors.confirmPassword}
                                        helperText={errors.confirmPassword?.message}
                                    />
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{mt: 3, mb: 2}}
                            >
                                Sign Up
                            </Button>
                            <Typography variant="body2">
                                Already have an account?
                            </Typography>
                            <Grid container justifyContent="center">
                                <Grid item>
                                    <Link onClick={()=>navigate("/login")} href="#" variant="body2">
                                         Sign in
                                    </Link>
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                </Container>
            </Paper>
        </ThemeProvider>
    );
};