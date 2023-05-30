import {Header} from "../header/Header.tsx";
import {Outlet} from "react-router-dom";
import Container from "@mui/material/Container";


export const Layout = () => {
    return(
        <>
            <Header/>
            <Container sx={{ height: 'calc(100vh - auto)' }}>
                <Outlet />
            </Container>
        </>
    )
}
