import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import BorderColorOutlinedIcon from "@mui/icons-material/BorderColorOutlined";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import {HeaderCellType} from "../../../../common/components/tableHeader/TableHeader.tsx";
import {useAppDispatch, useAppSelector} from "../../../../app/hooks.ts";
import {TableContent} from "../../../../common/components/tableContent/TableContent.tsx";
import {useEffect} from "react";
import {getCards} from "../cards/pack-cardSlice.ts";
import {useParams} from "react-router-dom";
import {Rating} from "@mui/material";


export const CardsPackTable = () => {

    const getProfileData = useAppSelector(state => state.profileReducer.profile)
    const cardPacks = useAppSelector(state => state.packCardsReducer.packCards.cardPacks)
    const status = useAppSelector(state => state.packCardsReducer.status)
    const dispatch = useAppDispatch()
    const cardUserId = useAppSelector(state => state.packCardsReducer.packCards.packUserId)
    const { packId } = useParams<{ packId: string }>()

    useEffect(()=> {
        dispatch(getCards({ cardsPack_id: packId as string }))
    },[])

    const _id = getProfileData._id
    const isMe = cardUserId === _id

    const headCells: HeaderCellType[] = [
        {id: 'question', label: 'Question'},
        {id: 'answer', label: 'Answer'},
        {id: 'updated', label: 'Last updated'},
        {id: 'grade', label: 'Grade'},
    ]


    const packCardsItem = cardPacks.map(el => (
        <TableRow hover key={el._id}>
            <TableCell component="th" scope="row">
                <div
                    style={{
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: ' ellipsis',
                }}
                >
                    {el.questionImg ? (
                        <img style={{ height: '35px', marginLeft: '20px' }} alt="img" src={el.questionImg} />
                    ) : (
                        el.question
                    )}
                </div>
            </TableCell>
            <TableCell align="left">{el.updated?.slice(0, 10)}</TableCell>
            <TableCell
                align="left"
                sx={{
                    display: 'table-cell',
                }}
            >
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'flex-start',
                        alignItems: 'center',
                    }}
                >
                    <Rating sx={{padding:"10px"}} name="read-only" value={el.grade} readOnly />
                    {isMe && (
                        <span
                            style={{
                                display: 'flex',
                                flexDirection: 'row',
                                justifyContent: 'flex-start',
                                alignItems: 'center',
                            }}
                        >
              <IconButton
                  sx={{padding:"10px"}}
                  onClick={()=>{}}
              >
                <BorderColorOutlinedIcon />
              </IconButton>
              <IconButton onClick={()=>{}}>
                <DeleteOutlinedIcon />
              </IconButton>
            </span>
                    )}
                </div>
            </TableCell>
        </TableRow>
    ))

    return (
        <>
        <TableContent headerCells={headCells} sortTableHandler={()=>{}} status={status}>
            {packCardsItem}
        </TableContent>
        </>
    )
}