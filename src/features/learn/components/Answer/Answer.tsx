import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import {useLearn} from "../../hooks/useLearn.ts";
import {AnswerForm} from "./AnswerForm.tsx";


const imageStyle = { height: '35px', marginLeft: '20px' }

export const Answer = () => {
    const { card } = useLearn()

    return (
        <>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <Typography
                    component={'span'}
                    sx={{ paddingBottom: 2, display: 'flex', flexDirection: 'row', alignItems: 'center' }}
                >
                    <b>Answer:&nbsp;</b>
                    {card.questionImg!=="no_image"&&card.questionImg!==""&&card.questionImg!==undefined ? <img style={imageStyle} alt="img" src={card.answerImg} /> : card.answer}
                </Typography>
                <AnswerForm />
            </Box>
        </>
    )
}
