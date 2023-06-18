import CloseIcon from '@mui/icons-material/Close'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import Modal from '@mui/material/Modal'
import Typography from '@mui/material/Typography'
import {PropsWithChildren} from "react";

type BasicModalPropsType = {
    open:boolean
    title:string
    onClose:()=> void
}

export const BasicModal = ({open,title,onClose,children}:BasicModalPropsType & PropsWithChildren) => {
    return(
        <Modal open={open} onClose={onClose}>
            <Box sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: "translate(-50%, -50%)",
                width:"350px",
                padding:"20px 25px",
                backgroundColor:"#ffffff",
            }}>
                <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: 3,
                    borderBottom:"1px solid #D9D9D9"
                }}>
                    <Typography fontWeight={500} fontSize={22}>
                        {title}
                    </Typography>
                    <IconButton onClick={onClose}>
                        <CloseIcon />
                    </IconButton>
                </Box>
                {children}
            </Box>
        </Modal>
    )
}