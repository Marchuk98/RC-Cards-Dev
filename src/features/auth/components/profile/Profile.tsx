import Paper from "@mui/material/Paper/Paper";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from '@mui/material/IconButton';
import Avatar from "@mui/material/Avatar";
import edit_photo from '../../../../assets/img/forgotPasswordFlow/CheckEmailIcon.svg';
import {UserNameProfile} from "../../../../common/components/UserNameProfile/UserNameProfile.tsx";
import {useAppDispatch, useAppSelector} from "../../../../app/hooks.ts";
import {changeUserData} from "./profile.slice.ts";
import {ChangeEvent} from "react";

export const Profile = () => {
    const dispatch = useAppDispatch()

    const getProfile = useAppSelector(state => state.profileReducer.profile)

    const { avatar, email, name }  = getProfile


    const changeAvatar = async (file64: string) => {
        dispatch(changeUserData({ avatar: file64 }));
    };

    const handleFileChange = async (event: ChangeEvent<HTMLInputElement>) => {
        const files = event.target.files;
        if (files && files.length > 0) {
            const file = files[0];
            const reader = new FileReader();

            reader.onload = () => {
                const base64 = reader.result?.toString();
                if (base64) {
                    changeAvatar(base64);
                }
            };

            reader.readAsDataURL(file);
        }
    };

  return(
      <Paper elevation={3} sx={{padding: "25px",margin:'50px auto',maxWidth: "413px"}}>
        <Container component="main"  >
          <CssBaseline/>
          <Box
              sx={{
                maxWidth: "413px",
                marginTop: 1,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
          >
            <Typography component={'h1'}
                        style={{ marginBottom: 15, textAlign: 'center', fontSize: '26px', fontWeight: 600 }}>
                Personal Information
            </Typography>
              <div style={{ position: 'relative' }}>
                  <Avatar alt="Remy Sharp" src={avatar} sx={{ width: '100px', height: '100px', margin: '35px' }} />
                  <IconButton
                      sx={{
                          position: 'absolute',
                          bottom: '40px',
                          right: '15px',
                          width: '60px',
                          height: '35px',
                          padding: 0,
                      }}
                      component="label"
                  >
                      <input
                          hidden
                          accept="image/png, image/jpeg"
                          type="file"
                          onChange={handleFileChange}
                      />
                      <img
                          src={edit_photo}
                          alt="Edit Photo"
                          style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                      />
                  </IconButton>
              </div>
              <div style={{ height: '20px', marginBottom: '45px' }}>
                    <UserNameProfile name={name} avatar={avatar}/>
                </div>
                    <div>{email}</div>
              <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{
                      mt: 4,
                      mb: 2,
                      color:"#000000",
                      borderRadius: "25px",
                      textTransform: 'none',
                      width: "127px",
                      height: "36px",
                      backgroundColor: "#FCFCFC",
                      '&:hover': {
                          backgroundColor: 'inherit',
                      }
                  }}
              >
                  Log out
              </Button>
            </Box>
        </Container>
      </Paper>
  )
};
