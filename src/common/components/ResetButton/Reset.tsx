import { FC, memo } from 'react'

import FilterAltOffIcon from '@mui/icons-material/FilterAltOff'
import IconButton from '@mui/material/IconButton'

type ResetButtonType = {
    onIconClick: () => void
    disabled: boolean
}

export const Reset: FC<ResetButtonType> = memo(({ onIconClick, disabled }) => {
    return (
        <IconButton
            disabled={disabled}
            onClick={onIconClick}
            sx={{ backgroundColor: '#fff', border: ' 1px solid #E8E8E8', borderRadius: '2px' }}
        >
            <FilterAltOffIcon />
        </IconButton>
    )
})
