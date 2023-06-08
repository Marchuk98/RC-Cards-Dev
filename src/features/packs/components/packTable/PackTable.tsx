import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import {useEffect} from "react";
import {useParams} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../../../app/hooks.ts";
import {getPacks} from "../packs/pack-listSlice.ts";
import {TableContent} from "../tableContent/TableContent.tsx";
import {HeaderCellType} from "../tableHeader/TableHeader.tsx";

export const PackTable = () => {

    const getProfileData = useAppSelector(state => state.profileReducer.profile)
    const cardPacks = useAppSelector(state => state.packListReducer.packList.cardPacks)
    const dispatch = useAppDispatch()
    const pageParam = useAppSelector(state => state.packListReducer.queryParams.page)
    const pageCountParam = useAppSelector(state => state.packListReducer.queryParams.pageCount)
    const {packId} = useParams<{ packId: string }>()

    useEffect(() => {
        dispatch(getPacks())
    }, [dispatch, packId, pageParam, pageCountParam])

    console.log(cardPacks)

    const headCells: HeaderCellType[] = [
        {id: 'name', label: 'Name'},
        {id: 'cardsCount', label: 'Cards'},
        {id: 'updated', label: 'Last updated'},
        {id: 'user_name', label: 'Created by'},
        {id: 'empty', label: 'Actions'},
    ]

    const packArrayItem = cardPacks.map(el => (
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
                        }}>
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
                    onClick={() => {
                    }}
                >
                    <SchoolOutlinedIcon/>
                </IconButton>
                {getProfileData._id === el.user_id && (
                    <>
                        <IconButton
                            sx={{padding: "15px"}}
                            onClick={() => {
                            }}
                        >
                            <BorderColorOutlinedIcon/>
                        </IconButton>
                        <IconButton
                            sx={{padding: "15px"}}
                            onClick={() => {
                            }}
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
            <TableContent headerCells={headCells}>{packArrayItem}</TableContent>
        </>
    )
}