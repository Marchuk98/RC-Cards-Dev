import {Visibility, VisibilityOff} from "@mui/icons-material";
import {FormControl, Input, InputAdornment, InputLabel} from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import IconButton from "@mui/material/IconButton";
import Paper from "@mui/material/Paper/Paper";
import Typography from "@mui/material/Typography";
import React from "react";
import {useForm} from "react-hook-form";
import {useNavigate, useParams} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../../../app/hooks.ts";
import {authThunks} from "../../auth.slice.ts";

type NewPasswordType = {
  password: string;
}

export const NewPassword = () => {
  const {resetPasswordToken} = useParams();
  const navigate = useNavigate()
  const [showPassword, setShowPassword] = React.useState(false);
  const isNewPasswordSet = useAppSelector((state)=>state.authReducer.isNewPasswordSet)
  if(isNewPasswordSet){
    navigate("/login")
  }
  const dispatch = useAppDispatch()
  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm<NewPasswordType>();

  const onSubmit = (data: NewPasswordType) => {
    dispatch(authThunks.newPassword({...data, resetPasswordToken}));
  };

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  return (<Paper elevation={3} sx={{
        margin: '50px auto', maxWidth: "413px"
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
            <Typography sx={{
              marginTop:"35px",
              fontWeight: "600",
              fontSize: "26px",
              lineHeight: "32px",
              marginBottom: "40px"
            }} component="h1" variant="h3">
              Create new password
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit(onSubmit)} sx={{mt: 1}}>
              <FormControl sx={{ m: 1, width: '347px' }} variant="standard">
                <InputLabel htmlFor="standard-adornment-password">Password*</InputLabel>
                <Input
                    id="standard-adornment-password"
                    type={showPassword ? 'text' : 'password'}
                    {...register('password', {
                      required: 'Email is required',
                      minLength:{value: 7, message: "Min length of password 7"}
                    })}
                    error={!!errors.password}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    }
                />
                { !!errors.password && <span style={{color: "red"}}>{errors.password.message}</span>}
              </FormControl>
              <Typography sx={{
                marginTop: "10px",
                marginBottom: "15px",
                fontWeight: "400",
                fontSize: "14px",
                lineHeight: "24px",
                textAlign:"center",
                opacity: "0.5",
                width: "347px"
              }} component="p">
                Create new password and just use new password in login
              </Typography>
              <Button
                  type={"submit"}
                  fullWidth
                  variant="contained"
                  sx={{ml:1,mt: 3, mb: 5, borderRadius: "25px", width:"347px"}}
              >
                Create new password
              </Button>
            </Box>
          </Box>
        </Container>
      </Paper>
  )
};
