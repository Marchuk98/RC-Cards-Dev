import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper/Paper";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import {useForm} from "react-hook-form";
import {useNavigate} from "react-router-dom";
import {developers} from "../../../../app/common/constants/email-message.ts";
import {useAppDispatch} from "../../../../app/hooks.ts";
import {authThunks} from "../../../../features/auth/auth.slice.ts";

type ForgotPasswordType = {
    email: string;
}

export const ForgotPassword = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch()
    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm<ForgotPasswordType>();

    const onSubmit = (data: ForgotPasswordType) => {
        dispatch(authThunks.forgot({...data, ...developers}));
    };
  return (
          <Paper elevation={3} sx={{padding: "25px"}}>
              <Container component="main"  >
                  <CssBaseline/>
                  <Box
                      sx={{
                          maxWidth: "413px",
                          marginTop: 8,
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'center',
                      }}
                  >
                      <Typography component={'h1'}
                                  style={{ marginBottom: 30, textAlign: 'center', fontSize: '26px', fontWeight: 700 }}>
                          Forgot your password?
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
                          <Typography sx={{ textAlign:"center",maxWidth: '347px', opacity: 0.5 }} component={'span'}>
                              Enter your email address and we will send you further instructions
                          </Typography>
                          <Button
                              type="submit"
                              fullWidth
                              variant="contained"
                              sx={{mt: 3, mb: 2, borderRadius:"25px"}}
                          >
                              Send Instructions
                          </Button>
                          <Typography sx={{fontWeight: "600",
                              fontSize: "14px",
                              lineHeight: "24px",
                          opacity:"0.5"}} variant="body2">
                              Did you remember your password?
                          </Typography>
                          <Grid container justifyContent="center">
                              <Grid item>
                                  <Link onClick={()=>navigate("/login")} sx={{fontWeight: "600",
                                      fontSize: "16px",
                                      lineHeight: "24px",
                                  }} href="#" variant="body2">
                                      Try logging in
                                  </Link>
                              </Grid>
                          </Grid>
                      </Box>
                  </Box>
              </Container>
          </Paper>
  );
};
