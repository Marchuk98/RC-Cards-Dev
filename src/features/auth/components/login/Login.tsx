import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import FormControlLabel from '@mui/material/FormControlLabel';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Paper from "@mui/material/Paper/Paper"
import {createTheme, ThemeProvider} from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import {useForm} from "react-hook-form";
import {useAppDispatch} from "../../../../app/hooks.ts";
import {authThunks} from "../../auth.slice.ts";


type FormValues = {
    email: string
    password: string
    rememberMe: boolean
}

export const Copyright = (props: any) => (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
        {'Copyright © '}
        <Link color="inherit" href="https://mui.com/">
            xDD
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
    </Typography>
);

const defaultTheme = createTheme();

export const Login = () => {
    const dispatch = useAppDispatch()
    const form = useForm<FormValues>({
        defaultValues: {
            email: "",
            password: "",
            rememberMe: false
        }
    })
    const {
        register,
        handleSubmit,
        formState
    } = form
    const {errors} = formState
    const onSubmit = (data: FormValues) => {
        const {email, password, rememberMe} = data;
        const requestData = {
            email: email,
            password: password,
            rememberMe: rememberMe
        };
        dispatch(authThunks.loginUser(requestData));
    }
    return (
        <ThemeProvider theme={defaultTheme}>
            <Paper elevation={3} sx={{
                padding: "25px"
            }}>
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
                            Sign in
                        </Typography>
                        <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate sx={{mt: 1}}>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                autoComplete="email"
                                autoFocus
                                {...register("email", {
                                    required: "Email is required",
                                    pattern: {value: /^\S+@\S+$/i, message: 'Invalid email'}
                                })}
                                error={!!errors.email}
                                helperText={errors.email?.message}
                            />

                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                                {...register("password", {
                                    required: "Password is required",
                                    minLength: { value: 8, message: "Password should be more then 8" }
                                })}
                                error={!!errors.password}
                                helperText={errors.password?.message}
                            />
                            <FormControlLabel
                                control={<Checkbox
                                    color="primary"
                                    {...register("rememberMe")}/>}
                                label="Remember me"
                            />
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{mt: 3, mb: 2, borderRadius: "25px"}}
                            >
                                Sign In
                            </Button>
                            <Grid container>
                                <Grid item xs>
                                    <Link href="#" variant="body2">
                                        Forgot password?
                                    </Link>
                                </Grid>
                                <Grid item>
                                    <Link href="#" variant="body2">
                                        {"Don't have an account? Sign Up"}
                                    </Link>
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                    <Copyright sx={{mt: 8, mb: 4}}/>
                </Container>
            </Paper>
        </ThemeProvider>
    );
};
