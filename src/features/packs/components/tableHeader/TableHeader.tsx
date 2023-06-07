import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";


export type HeaderCellType = {
    id: string
    label: string
}

type TableHeaderPropsType = {
    headerCells: HeaderCellType[]
}

export const TableHeader = ({headerCells}: TableHeaderPropsType) => {

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
                    >
                        {el.label}
                    </TableCell>
                ))}
            </TableRow>
        </TableHead>
    )
}