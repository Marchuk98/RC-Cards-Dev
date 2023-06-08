import { FC, memo } from 'react'

import Box from '@mui/material/Box'
import Button from '@mui/material/Button/Button'
import ButtonGroup from '@mui/material/ButtonGroup'
import Typography from '@mui/material/Typography'


type ButtonsGroupType = {
    onClickMy?: () => void
    onClickAll?: () => void
    disabled: boolean
}

export const ButtonsGroup: FC<ButtonsGroupType> = memo(({ onClickAll, onClickMy, disabled }) => {
    return (
        <Box>
            <Typography margin={'0 0 8px 0'} fontSize={15} fontWeight={500}>
                Show packs cards
            </Typography>
            <ButtonGroup variant="contained">
                <Button
                    disabled={ disabled}
                    onClick={onClickMy}
                    size={'large'}
                >
                    My
                </Button>
                <Button
                    disabled={ disabled}
                    onClick={onClickAll}
                    size={'large'}
                >
                    All
                </Button>
            </ButtonGroup>
        </Box>
    )
})
