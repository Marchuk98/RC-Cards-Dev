import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import {useNavigate} from "react-router-dom";
import Button from '@mui/material/Button';
import {useAppSelector} from "../../../app/hooks.ts";
import {SimpleMenu} from "../../dropdownMenu/DropdownMenu.tsx";
import Link from "@mui/material/Link";
import logo from "../../../assets/img/logo-header.svg"
import {LinearProgress} from "@mui/material";


export const Header = () => {

    const isLoggedIn = useAppSelector(state => state.authReducer.isLoggedIn)
    const status = useAppSelector(state => state.appReducer.status)
    const navigate = useNavigate()

    const onClick = () => navigate('/login')

    return (
        <AppBar color={'transparent'} position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                     <span style={{flex: 1}}>
            <Link>
              <img src={logo} alt="incubator-logo"/>
            </Link>
          </span>
                    {!isLoggedIn ? (
                        <Button onClick={onClick} size={'small'} style={{
                            borderRadius: 35,
                            backgroundColor: "#366EFF",
                            border: 'none !important',
                            boxShadow: "0px 4px 18px rgba(54, 110, 255, 0.35), inset 0px 1px 0px rgba(255, 255, 255, 0.3)",
                            padding: "5px 20px",
                            fontSize: "18px",
                            textTransform: 'none'
                        }} variant="contained">
                            Sign in
                        </Button>
                    ) : (
                        <SimpleMenu/>
                    )}
                </Toolbar>
            </Container>
            {status === "loading" && <LinearProgress/>}
        </AppBar>
    );
}

