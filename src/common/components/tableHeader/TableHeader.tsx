import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Box from "@mui/material/Box";
import TableCell from "@mui/material/TableCell";
import TableSortLabel from '@mui/material/TableSortLabel'
import { visuallyHidden } from '@mui/utils'
import {useState} from "react";
import {StatusType} from "../../type/types.ts";

type Order = 'asc' | 'desc'

export type HeaderCellType = {
    id: string
    label: string
}

type TableHeaderPropsType = {
    headerCells: HeaderCellType[]
    onSortPackList:(sortHeaderData:string) => void
    status:StatusType
}

export const TableHeader = ({headerCells,onSortPackList,status}: TableHeaderPropsType) => {

    const [order, setOrder] = useState<Order>('desc')
    const [orderBy, setOrderBy] = useState<string>(headerCells[2].id)


    const onClickSortHandler = (property: string) => {
        const isAsc = orderBy === property && order === 'asc'

        setOrder(isAsc ? 'desc' : 'asc')
        setOrderBy(property)
        onSortPackList((isAsc ? '0' : '1') + property)
    }

    return (
        <TableHead>
            <TableRow sx={{backgroundColor: '#EFEFEFFF'}}>
                {headerCells.map(el => (
                    <TableCell
                        sx={{
                            width: '220px',
                            '&:first-of-type': {width: '350px'},
                            '&:last-of-type': {width: '280px'},
                        }}
                        key={el.id}
                        sortDirection={orderBy === el.id ? order : false}
                    >
                        {el.id === 'empty' ? (
                            el.label
                        ) : (
                            <TableSortLabel
                                disabled={status === 'loading'}
                                active={orderBy === el.id}
                                direction={orderBy === el.id ? order : 'asc'}
                                onClick={() => onClickSortHandler(el.id)}
                            >
                                {el.label}
                                {orderBy === el.id ? (
                                    <Box component="span" sx={visuallyHidden}>
                                        {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                                    </Box>
                                ) : null}
                            </TableSortLabel>
                        )}
                    </TableCell>
                ))}
            </TableRow>
        </TableHead>
    )
}