import {BasicModal} from "../BasicModal/BasicModal.tsx";
import Typography from "@mui/material/Typography";
import {ModalsButtons} from "../ModalsButtons/ModalsButtons.tsx";

type DeleteModalPropsType = {
    open: boolean
    modalTitle: string
    entityName?: string
    entityTitle?: string
    callBack?: () => void
    handleClose: () => void
    disabled: boolean
}


export const DeleteModal = ({open, modalTitle, entityName, entityTitle, callBack, handleClose, disabled}: DeleteModalPropsType) => {


    return (
        <BasicModal open={open} title={`Delete ${entityTitle}`} onClose={handleClose}>
            <Typography padding={'0 0 30px 0'}>
                {modalTitle} <b>{entityName}</b>?
                <ModalsButtons
                    title={'Delete'}
                    disabled={disabled}
                    callbackCancel={handleClose}
                    callbackSave={callBack}
                />
            </Typography>
        </BasicModal>
    )
}