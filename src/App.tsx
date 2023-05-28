import './App.css'
import {Login} from "./features/auth/components/login/Login.tsx";
import {Register} from "./features/auth/components/Register/Register.tsx";
import {Packs} from "./features/packs/components/packs/Packs.tsx";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {Profile} from "./features/auth/components/profile/Profile.tsx";
import {Provider} from "react-redux";
import {createTheme, ThemeProvider} from "@mui/material";
import {store} from "./app/store.ts";


const router = createBrowserRouter([
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
const theme = createTheme()
function App() {
  return (
    <>
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <RouterProvider router={router} />
            </ThemeProvider>
        </Provider>
    </>
  )
}

export default App
