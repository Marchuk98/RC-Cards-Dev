import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import {FC} from 'react'
import {Title} from "../Title/Title.tsx";

type SubHeaderType = {
    title: string
    titleButton: string
    onClick?: () => void
    disabled: boolean
    isLoading:boolean
}

export const SubHeader: FC<SubHeaderType> = ({
                                                 onClick,
                                                 titleButton,
                                                 title,
                                                 disabled,
                                                 isLoading
                                             }) => {
    return (
        <Grid container justifyContent={'space-between'} alignItems={'center'} sx={{paddingTop: 1, marginBottom: 3}}>
            <Title sx={{flex: '0 0 25%',
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: ' ellipsis',
                maxWidth: 320,}} isLoading={isLoading} align={'left'}>
                {title}
            </Title>
            {titleButton && (
                <Button onClick={onClick} variant={'contained'} disabled={disabled}>
                    {titleButton}
                </Button>
            )}
        </Grid>
    )
}
