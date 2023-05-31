import { forwardRef, SyntheticEvent } from 'react'
import MuiAlert, { AlertProps } from '@mui/material/Alert'
import Snackbar from '@mui/material/Snackbar'
import { useAppDispatch, useAppSelector } from "../../app/hooks.ts";
import { appActions } from "../../app/app.slice.ts";

const Alert = forwardRef<HTMLDivElement, AlertProps>((props, ref) => {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />
})

export const DescriptionSnackbar = () => {
    const error = useAppSelector(state => state.appReducer.error);
    const dispatch = useAppDispatch();

    const handleClose = (event: SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return
        }

        dispatch(appActions.setError({error:null}));
    }

    return (
        <Snackbar open={!!error} autoHideDuration={2000} onClose={handleClose}>
            <Alert
                onClose={handleClose}
                severity="error"
                sx={{ width: '100%' }}
            >
                {error}
            </Alert>
        </Snackbar>
    )
}