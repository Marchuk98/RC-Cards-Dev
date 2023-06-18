import Select, { SelectChangeEvent } from '@mui/material/Select'
import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";

type VariantType = 'text' | 'picture'

type CustomSelectType = {
    type: VariantType
    setType: (type: VariantType) => void
}

export const CustomSelect = ({ type, setType }:CustomSelectType) => {
    const handleChange = (event: SelectChangeEvent) => {
        setType(event.target.value as VariantType)
    }

    return (
        <>
            <Typography sx={{ opacity: 0.5 }} fontSize={14} m={'0 0 8px 0'}>
                Choose a question format
            </Typography>
            <Select
                size={'small'}
                sx={{ width: '100%', m: '0 0 24px 0' }}
                value={type}
                onChange={handleChange}
            >
                <MenuItem value={'text'}>Text</MenuItem>
                <MenuItem value={'picture'}>Picture</MenuItem>
            </Select>
        </>
    )
}