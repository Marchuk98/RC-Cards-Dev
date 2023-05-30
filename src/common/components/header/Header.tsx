import {AppBar, Toolbar} from "@mui/material";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import Button from "@mui/material/Button";
import {useNavigate} from "react-router-dom";
import LinearProgress from '@mui/material/LinearProgress';
import logo from "../../../assets/img/logo-header.svg"
import {DescriptionSnackbar} from "../../snackbar/Snackbar.tsx";
import {useAppSelector} from "../../../app/hooks.ts";
import {StatusType} from "../../type/types.ts";
// import Typography from "@mui/material/Typography";
// import Box from '@mui/material/Box';
// import {DescriptionSnackbar} from "../../snackbar/Snackbar.tsx";


export const Header = () => {

    const navigate = useNavigate()
    const onClick = () => navigate('/login')

    const status = useAppSelector<StatusType>(state => state.appReducer.status)

    return (
        <AppBar color={'transparent'} position="static">
            <Container maxWidth="md">
                <Toolbar style={{justifyContent: 'space-evenly'}}>
          <span style={{flex: 1}}>
            <Link>                  {/* в дальнейшем сюда нужно будет указать ссылку для перехода на main */}
                <img src={logo} alt="incubator-logo"/>
            </Link>
          </span>
                    <Button onClick={onClick} size={'small'}>
                        Sign in
                    </Button>
                    <DescriptionSnackbar/>
                </Toolbar>
            </Container>
            {status === 'loading' && <LinearProgress/>}
        </AppBar>
    )
}
