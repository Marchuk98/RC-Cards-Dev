import Box from '@mui/material/Box'
import Button from '@mui/material/Button'

type ModalsButtonsPropsType = {
    title:string
    disabled?:boolean
    callbackCancel:() => void
    callbackSave?:() => void
}

export const ModalsButtons = ({title,disabled,callbackCancel,callbackSave}:ModalsButtonsPropsType) => {

    return (
        <Box sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
        }}>
            <Button onClick={callbackCancel} color={'error'} size={'small'}>
                Cancel
            </Button>
            <Button
                disabled={disabled}
                onClick={callbackSave}
                type={'submit'}
                color={'primary'}
                size={'small'}
            >
                {title}
            </Button>
        </Box>
    )
}