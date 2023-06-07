import Paper from "@mui/material/Paper/Paper";
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import {HeaderCellType, TableHeader} from "../tableHeader/TableHeader.tsx";
import TableBody from "@mui/material/TableBody";


type TableContentPropsType = {
    headerCells: HeaderCellType[]
    children?: JSX.Element[]
}

export const TableContent = ({headerCells,children}:TableContentPropsType) => {
    return (
        <Paper sx={{width: '100%', mb: 2,mt:30}}>
            <TableContainer>
                <Table sx={{minWidth: 750}} aria-labelledby="tableTitle" size={'medium'}>
                    <TableHeader headerCells={headerCells}/>
                    <TableBody>
                    {children}
                    </TableBody>
                </Table>
            </TableContainer>
        </Paper>
    )
}