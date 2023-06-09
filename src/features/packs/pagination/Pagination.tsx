import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";


type PaginationPropsType = {
    page: number
    rows: number
    count: number
    disabled: boolean
    onChange: (page: number) => void
    onChangePageCount: (pageCount: number) => void
}

export const CustomPagination = ({page, rows, count, disabled, onChange, onChangePageCount}: PaginationPropsType) => {

    const totalPages = Math.ceil(count / rows);

    const handleChangePage = (_event: ChangeEvent<unknown>, newPage: number) => {
        onChange(newPage);
    };

    const handleChangeRowsPerPage = (event: SelectChangeEvent<number>) => {
        const newRowsPerPage = parseInt(event.target.value as string, 10);
        onChangePageCount(newRowsPerPage);
        onChange(0);
    };


    return (
        <Stack direction="row" alignItems="center">
            <Pagination
                count={totalPages}
                page={page}
                onChange={handleChangePage}
                disabled={disabled}
                showFirstButton
                showLastButton
                siblingCount={2}
                boundaryCount={2}
            />
            <FormControl>
                <InputLabel id="rows-per-page-label" sx={{mt: 1.4, fontSize: "23px"}}>Show</InputLabel>
                <Select
                    labelId="rows-per-page-label"
                    id="rows-per-page-select"
                    value={rows}
                    onChange={handleChangeRowsPerPage}
                    disabled={disabled}
                    sx={{
                        ml: 10,
                        width: '70px',
                        height: '30px',
                    }}
                >
                    <MenuItem value={4}>4</MenuItem>
                    <MenuItem value={7}>7</MenuItem>
                    <MenuItem value={10}>10</MenuItem>
                </Select>
                <InputLabel sx={{mt: 1.4, ml: 20, fontSize: "23px"}}>Cards per Page</InputLabel>
            </FormControl>
        </Stack>

    )
}