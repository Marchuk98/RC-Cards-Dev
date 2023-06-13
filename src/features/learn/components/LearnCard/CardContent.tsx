import { useEffect, useState } from 'react'

import Button from '@mui/material/Button'
import {Answer} from "../Answer/Answer.tsx";
import {Question} from "../Question/Question.tsx";


export const CardContent = () => {
    const [isVisible, setIsVisible] = useState(false)

    const showButton = () => {
        setIsVisible(!isVisible)
    }

    useEffect(() => {
        return () => {
            setIsVisible(false)
        }
    }, [])

    return (
        <>
            <Question />
            {!isVisible && (
                <Button color={'primary'} size={'large'} variant={'contained'} onClick={showButton}>
                    Show answer
                </Button>
            )}
            {isVisible && <Answer />}
        </>
    )
}
