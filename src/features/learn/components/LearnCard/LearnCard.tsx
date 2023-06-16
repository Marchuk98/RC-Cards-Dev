import Card from '@mui/material/Card'
import {CardContent} from "./CardContent.tsx";


export const LearnCard = () => {
    return (
        <Card variant="outlined" sx={{
            width: 439,
            minHeight: 204,
            margin: '0 auto',
            display: 'flex',
            flexDirection: 'column',
            padding: 5,
        }}>
            <CardContent />
        </Card>
    )
}