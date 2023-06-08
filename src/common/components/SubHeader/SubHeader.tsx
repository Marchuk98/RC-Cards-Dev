import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import Typography from "@mui/material/Typography";
import {FC} from 'react'

type SubHeaderType = {
    title: string
    titleButton: string
    onClick?: () => void
    disabled: boolean
}

export const SubHeader: FC<SubHeaderType> = ({
                                                 onClick,
                                                 titleButton,
                                                 title,
                                                 disabled,
                                             }) => {
    return (
        <Grid container justifyContent={'space-between'} alignItems={'center'} sx={{paddingTop: 1, marginBottom: 3}}>
            <Typography sx={{
                flex: '0 0 25%',
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: ' ellipsis',
                maxWidth: 320,
            }} variant={'h1'} fontSize={22} fontWeight={600} textAlign={"left"}>
                {title}
            </Typography>
            {titleButton && (
                <Button onClick={onClick} variant={'contained'} disabled={disabled}>
                    {titleButton}
                </Button>
            )}
        </Grid>
    )
}
