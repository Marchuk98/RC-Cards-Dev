import {createHashRouter} from "react-router-dom";
import {CheckEmail} from "../../features/auth/components/chek-email/CheckEmail.tsx";
import {NewPassword} from "../../features/auth/components/new-password/NewPassword.tsx";
import {ForgotPassword} from "../../features/auth/components/forgot-password/ForgotPassword.tsx";
import {Profile} from "../../features/auth/components/profile/Profile.tsx";
import {Login} from "../../features/auth/components/login/Login.tsx";
import {Register} from "../../features/auth/components/Register/Register.tsx";
import {Packs} from "../../features/packs/components/packs/Packs.tsx";
import App from "../../app/App.tsx";
import {Cards} from "../../features/cards/components/cards/Cards.tsx";

export const router = createHashRouter([
    {
        element: <App/>,
        children: [
            {
                path: "/login",
                element: <Login/>,
            },
            {
                path: "/",
                element: <Profile/>,
            },
            {
                path: "/register",
                element: <Register/>,
            },
            {
                path: "/packs",
                element: <Packs/>,
            },
            {
                path: "/forgotPassword",
                element: <ForgotPassword/>,
            },
            {
                path: "/checkEmail",
                element: <CheckEmail/>,
            },
            {
                path: "/set-new-password/:resetPasswordToken",
                element: <NewPassword/>,
            },
            {
                path: "/packs-item",
                element: <Packs/>,
            },
            {
                path: "/packs-cards",
                element: <Cards/>,
            },
        ],
    },
])