import Paper from "@mui/material/Paper/Paper";
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import {HeaderCellType, TableHeader} from "../tableHeader/TableHeader.tsx";
import TableBody from "@mui/material/TableBody";
import {StatusType} from "../../../../common/type/types.ts";


type TableContentPropsType = {
    headerCells: HeaderCellType[]
    children?: JSX.Element[]
    sortTableHandler:(sortHeaderData:string) => void
    status:StatusType
}

export const TableContent = ({headerCells,children,sortTableHandler,status}:TableContentPropsType) => {
    return (
        <Paper sx={{width: '100%', mb: 2,mt:30}}>
            <TableContainer>
                <Table sx={{minWidth: 750}} aria-labelledby="tableTitle" size={'medium'}>
                    <TableHeader
                        headerCells={headerCells}
                        status={status}
                        onSortPackList={sortTableHandler}
                    />
                    <TableBody>
                    {children}
                    </TableBody>
                </Table>
            </TableContainer>
        </Paper>
    )
}