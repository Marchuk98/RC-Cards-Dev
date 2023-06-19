import BorderColorOutlinedIcon from "@mui/icons-material/BorderColorOutlined";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import {Rating} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import {TableContent} from "../../../../common/components/tableContent/TableContent.tsx";
import {HeaderCellType} from "../../../../common/components/tableHeader/TableHeader.tsx";
import {useModals} from "../../../modals/hooks/useModals.ts";
import {useCardsPack} from "../../hooks/useCardsPack.ts";


export const CardsPackTable = () => {

    const {cardPacks, isMe, status} = useCardsPack()
    const {showModal} = useModals()

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
                    {el.questionImg !== "no_image" && el.questionImg !== undefined && el.questionImg !== "" ? (
                        <img style={{height: '35px', marginLeft: '20px'}} alt="img" src={el.questionImg}/>
                    ) : (
                        el.question
                    )}
                </div>
            </TableCell>
            <TableCell align="left">
                {el.answerImg !== "no_image" && el.answerImg !== undefined && el.answerImg !== "" ? (
                    <img style={{height: '35px', marginLeft: '20px'}} alt="img" src={el.answerImg}/>
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
                    <Rating sx={{padding: "15px"}} name="read-only" value={el.grade} readOnly/>
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
                  sx={{padding: "15px"}}
                  onClick={showModal('edit', {
                      _id: el._id,
                      answer: el.answer,
                      question: el.question,
                      questionImg: el.questionImg,
                      answerImg: el.answerImg,
                  })}
              >
                <BorderColorOutlinedIcon/>
              </IconButton>
              <IconButton onClick={showModal('delete', el)}>
                <DeleteOutlinedIcon/>
              </IconButton>
            </span>
                    )}
                </div>
            </TableCell>
        </TableRow>
    ))

    return (
        <>
            <TableContent headerCells={headCells} sortTableHandler={() => {
            }} status={status}>
                {packCardsItem}
            </TableContent>
        </>
    )
}