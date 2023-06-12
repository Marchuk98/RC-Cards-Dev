import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import {useEffect} from "react";
import {useAppDispatch, useAppSelector} from "../../../../app/hooks.ts";
import {getPacks} from "../packs/pack-listSlice.ts";
import {TableContent} from "../../../../common/components/tableContent/TableContent.tsx";
import {HeaderCellType} from "../../../../common/components/tableHeader/TableHeader.tsx";
import {useFilters} from "../../hooks/use-filters.ts";
// import {useNavigate, useParams} from "react-router-dom";

export const PackTable = () => {

    const getProfileData = useAppSelector(state => state.profileReducer.profile)
    const cardPacks = useAppSelector(state => state.packListReducer.packList.cardPacks)
    const dispatch = useAppDispatch()
    const pageParam = useAppSelector(state => state.packListReducer.queryParams.page)
    const pageCountParam = useAppSelector(state => state.packListReducer.queryParams.pageCount)
    const sortPack = useAppSelector(state => state.packListReducer.queryParams.sortPacks)
    const status = useAppSelector(state => state.packListReducer.status)
    // const navigate = useNavigate()
    // const { packId } = useParams<{ packId: string }>()
    // const navigateToCards = (packId:string | undefined) => navigate(`/pack/learn/${packId}`)

    useEffect(() => {
        dispatch(getPacks())
    }, [dispatch, pageParam, pageCountParam,sortPack])

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
                            onClick={() => {}}
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