import './App.css'
import {CircularProgress} from "@mui/material";
import {useEffect} from "react";
import {Layout} from "../common/components/layout/Layout.tsx";
import {authMe} from "../features/auth/auth.slice.ts";
import {useAppDispatch, useAppSelector} from "./hooks.ts";


export const App = () =>  {
    const dispatch = useAppDispatch()
    const isInitialized = useAppSelector<boolean>(state => state.appReducer.isInitialized)
    useEffect(()=>{
        dispatch(authMe())
    }, [])
    if(!isInitialized){
        return <CircularProgress/>
    }
  return (
    <>
        <Layout/>
    </>
  )
}
export default App
