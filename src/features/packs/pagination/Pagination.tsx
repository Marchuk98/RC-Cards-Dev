import TablePagination from "@mui/material/TablePagination";
import Table from '@mui/material/Table';
import {MouseEvent,ChangeEvent} from 'react';
import TableRow from "@mui/material/TableRow";
import {TableFooter} from "@mui/material";

type PaginationPropsType = {
    page:number
    rows:number
    count:number
    disabled:boolean
    onChange:(page:number) => void
    onChangePageCount:(pageCount:number) => void
}

export const Pagination = ({page,rows,count,disabled,onChange,onChangePageCount}:PaginationPropsType) => {

    const isDisabled = Math.ceil(count / rows) - 1 === page || page <= -1

    const handleChangePage = (_e:MouseEvent<HTMLButtonElement> | null, newPage: number,) => {
        onChange(newPage);
    };

    const handleChangeRowsPerPage = (e: ChangeEvent<HTMLInputElement>,) => {
        onChangePageCount(parseInt(e.target.value, 10));
        onChange(0);
    };


    return (
        <Table>
            <TableFooter>
                <TableRow>
                    <TablePagination
                        count={count}
                        page={page > 0 && count < rows ? 0 : page}
                        rowsPerPageOptions={[4, 7, 10]}
                        rowsPerPage={rows}
                        onPageChange={handleChangePage}
                        onRowsPerPageChange={handleChangeRowsPerPage}
                        showFirstButton
                        showLastButton
                        backIconButtonProps={{ disabled: disabled || page === 0 }}
                        nextIconButtonProps={{ disabled: disabled || isDisabled }}
                        hidden={!count}
                        sx={{
                            '& .MuiTablePagination-toolbar': {
                                padding: 0,
                                margin: '20px 0',
                            },
                        }}
                        SelectProps={{
                            disabled,
                        }}/>
                </TableRow>
            </TableFooter>
        </Table>

    )
}