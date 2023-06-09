import {useEffect} from "react";
import {ToastContainer} from "react-toastify";
import {appActions} from "../../../app/app.slice.ts";
import {useAppDispatch, useAppSelector} from "../../../app/hooks.ts";
import 'react-toastify/dist/ReactToastify.css';
export const GlobalError = () => {
    const error = useAppSelector((state) => state.appReducer.error);
    const dispatch = useAppDispatch();

    // Данный код необходим для того, чтобы занулять ошибку в стейте
    // после того как ошибка установилась.
    useEffect(() => {
        if (error !== null) {
            setTimeout(() => {
                dispatch(appActions.setError({ error: null }));
            }, 1000);
        }
    }, [error]);

    return (
        <ToastContainer
            position="top-center"
            autoClose={5000}
            closeOnClick
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
        />
    );
};
