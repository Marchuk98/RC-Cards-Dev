import {CircularProgress} from "@mui/material";
import {useEffect} from "react";
import {useNavigate} from "react-router-dom";
import {GlobalError} from "../common/components/GlobalError/GlobalError.tsx";
import {Layout} from "../common/components/layout/Layout.tsx";
import {authMe} from "../features/auth/auth.slice.ts";
import './App.css'
import {useAppDispatch, useAppSelector} from "./hooks.ts";


export const App = () =>  {
    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    const isInitialized = useAppSelector<boolean>(state => state.appReducer.isInitialized)
    const isNewPasswordSet = useAppSelector<boolean>(state => state.authReducer.isNewPasswordSet)
    useEffect(()=>{
        dispatch(authMe()).unwrap()
            .then(()=>navigate('/packs-item'))
            .catch(()=>{
                if(isNewPasswordSet){
                    navigate("/login")
                }
            })
    }, [dispatch])
    if(!isInitialized){
        return <CircularProgress/>
    }
  return (
    <>
        <Layout/>
        <GlobalError/>
    </>
  )
}
export default App
