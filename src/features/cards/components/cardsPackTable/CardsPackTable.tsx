import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import IconButton from "@mui/material/IconButton";
import BorderColorOutlinedIcon from "@mui/icons-material/BorderColorOutlined";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import {HeaderCellType} from "../../../../common/components/tableHeader/TableHeader.tsx";
import {TableContent} from "../../../../common/components/tableContent/TableContent.tsx";
import {Rating} from "@mui/material";
import {useCardsPack} from "../../hooks/useCardsPack.ts";


export const CardsPackTable = () => {

    const {cardPacks,isMe,status} = useCardsPack()

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
            <TableCell align="left">
                {el.answerImg ? (
                    <img style={{ height: '35px', marginLeft: '20px' }} alt="img" src={el.answerImg} />
                ) : (
                    el.answer
                )}
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
                    <Rating sx={{padding:"15px"}} name="read-only" value={el.grade} readOnly />
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
                  sx={{padding:"15px"}}
                  onClick={()=> {}}
              >
                <BorderColorOutlinedIcon />
              </IconButton>
              <IconButton onClick={()=> {}}>
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