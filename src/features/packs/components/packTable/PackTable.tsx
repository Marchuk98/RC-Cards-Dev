import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import {TableContent} from "../../../../common/components/tableContent/TableContent.tsx";
import {HeaderCellType} from "../../../../common/components/tableHeader/TableHeader.tsx";
import {useFilters} from "../../hooks/use-filters.ts";
import {usePackList} from "../../hooks/usePackList.ts";
import {useModals} from "../../../modals/hooks/useModals.ts";
import {useProfile} from "../../../../app/hooks/useProfile/useProfile.ts";

export const PackTable = () => {

    const getProfileData = useProfile()
    const {status,cardPacks,navigateToCards} = usePackList()
    const { showModal } = useModals()
    const {sortTableByHeader} = useFilters()

    const headCells: HeaderCellType[] = [
        {id: 'name', label: 'Name'},
        {id: 'cardsCount', label: 'Cards'},
        {id: 'updated', label: 'Last updated'},
        {id: 'user_name', label: 'Created by'},
        {id: 'empty', label: 'Actions'},
    ]

    const packsItem = cardPacks.map(el => (
        <TableRow hover key={el._id}>
            <TableCell component="th" scope="row">
                <Box sx={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                    <button
                        style={{
                            whiteSpace: 'nowrap',
                            overflow: 'hidden',
                            textOverflow: ' ellipsis',
                            maxWidth: 320,
                            background: "transparent",
                            display: "flex",
                            alignItems: "center"
                        }}
                        onClick={navigateToCards(el._id)}
                    >
                        {el.name}
                        {el.deckCover && (
                            <img style={{height: '35px', marginLeft: '20px'}} alt="img" src={el.deckCover}/>)}
                    </button>
                </Box>
            </TableCell>
            <TableCell align="left">{el.cardsCount}</TableCell>
            <TableCell align="left">{el.updated?.slice(0, 10)}</TableCell>
            <TableCell align="left">{el.user_name}</TableCell>
            <TableCell align="left" sx={{padding: '10px 16px'}}>
                <IconButton
                    sx={{padding: "15px"}}
                    disabled={el.cardsCount === 0}
                    onClick={() => {}}
                >
                    <SchoolOutlinedIcon/>
                </IconButton>
                {getProfileData._id === el.user_id && (
                    <>
                        <IconButton
                            sx={{padding: "15px"}}
                            onClick={showModal('edit', { name: el.name, _id: el._id, deckCover: el.deckCover })}
                        >
                            <BorderColorOutlinedIcon/>
                        </IconButton>
                        <IconButton
                            sx={{padding: "15px"}}
                            onClick={showModal('delete', { name: el.name, _id: el._id })}
                        >
                            <DeleteOutlinedIcon/>
                        </IconButton>
                    </>
                )}
            </TableCell>
        </TableRow>
    ))
    return (
        <>
            <TableContent
                headerCells={headCells}
                sortTableHandler={sortTableByHeader}
                status={status}
            >
                {packsItem}
            </TableContent>
        </>
    )
}