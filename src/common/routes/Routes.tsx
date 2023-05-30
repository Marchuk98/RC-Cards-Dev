import {createBrowserRouter} from "react-router-dom";
import {Profile} from "../../features/auth/components/profile/Profile.tsx";
import {Login} from "../../features/auth/components/login/Login.tsx";
import {Register} from "../../features/auth/components/Register/Register.tsx";
import {Packs} from "../../features/packs/components/packs/Packs.tsx";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Profile/>,
    },
    {
        path: "/login",
        element: <Login/>,
    },
    {
        path: "/register",
        element: <Register/> ,
    },
    {
        path: "/packs",
        element: <Packs/>,
    },
])