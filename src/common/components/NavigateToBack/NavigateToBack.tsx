import KeyboardBackspaceTwoToneIcon from '@mui/icons-material/KeyboardBackspaceTwoTone'
import IconButton from '@mui/material/IconButton'
import { useNavigate } from 'react-router-dom'

export const NavigateToBack = () => {
    const navigate = useNavigate()
    const returnToPackList = () => navigate("/packs-item")

    return (
        <div
            style={{
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                marginTop: '24px',
            }}
            onClick={returnToPackList}
        >
            <IconButton disableRipple disableTouchRipple>
                <KeyboardBackspaceTwoToneIcon sx={{ marginRight: '10px' }} />
            </IconButton>
            <span>Back to Packs List</span>
        </div>
    )
}
