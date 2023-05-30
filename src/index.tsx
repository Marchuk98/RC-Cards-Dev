import ReactDOM from 'react-dom/client'
import './index.css'
import {Provider} from "react-redux";
import {store} from "./app/store.ts";
import {createTheme, ThemeProvider} from "@mui/material/styles";
import {RouterProvider} from "react-router-dom";


import { router } from './common/routes/Routes.tsx'

const theme = createTheme()
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <Provider store={store}>
        <ThemeProvider theme={theme}>
            <RouterProvider router={router} />
        </ThemeProvider>
    </Provider>
)
