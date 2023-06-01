import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Paper from "@mui/material/Paper/Paper";
import Typography from "@mui/material/Typography";
import {useNavigate} from "react-router-dom";
import {useAppSelector} from "../../../../app/hooks.ts";
import CheckEmailIcon from "../../../../assets/img/forgotPasswordFlow/CheckEmailIcon.svg"

export const CheckEmail = () => {
    const navigate = useNavigate()
    const email = useAppSelector((state)=>state.authReducer.email)
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
                        lineHeight: "32px"
                    }} component="h1" variant="h3">
                        Check Email
                    </Typography>
                    <Box sx={{mt: 1}}>
                        <div style={{textAlign:"center", marginTop:"29px"}}>
                            <img src={CheckEmailIcon} alt=""/>
                        </div>
                        <Typography sx={{
                            marginTop: "31px",
                            fontWeight: "400",
                            fontSize: "14px",
                            lineHeight: "24px",
                            textAlign:"center",
                            opacity: "0.5"
                        }} component="p">
                            We’ve sent an Email with instructions to {email || "your Email adress(which you entered in the previous field)"}
                        </Typography>
                        <Button
                            fullWidth
                            variant="contained"
                            sx={{mt: 3, mb: 2, borderRadius: "25px", width:"347px"}}
                            onClick={()=>navigate("/login")}
                        >
                            Back to login
                        </Button>
                    </Box>
                </Box>
            </Container>
        </Paper>
    )
};
