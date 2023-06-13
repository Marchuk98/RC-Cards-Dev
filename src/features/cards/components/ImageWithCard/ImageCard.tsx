import Box from "@mui/material/Box";

type ImageCardPropsType = {
    deckCover?: string
    width?: string
    height?: string
}

export const ImageCard = ({deckCover,width,height}:ImageCardPropsType) => {
    return (
        <Box>
            {deckCover && <img src={deckCover} style={{height,width,marginTop:'50px',objectFit: 'contain' }} alt="avatar" />}
        </Box>
    )
}