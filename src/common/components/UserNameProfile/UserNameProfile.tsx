import {ChangeEvent, useState} from "react";
import TextField from "@mui/material/TextField";
import BorderColorIcon from '@mui/icons-material/BorderColor'
import Button from "@mui/material/Button";
import {useAppDispatch} from "../../../app/hooks.ts";
import {changeUserData} from "../../../features/auth/components/profile/profile.slice.ts";


type userNamePropsType = {
    name:string
    avatar:string | undefined
}

export const UserNameProfile = ({name:userName, avatar}:userNamePropsType) => {
    const [editMode, setEditMode] = useState<boolean>(false)
    const [error, setError] = useState<string | null>(null)
    const [name, setName] = useState<string>('')
    const dispatch = useAppDispatch()
    const editModeOffHandler = () => {
        if(name.trim() !== ''){
            setEditMode(false)
            if(name === userName) return
                dispatch(changeUserData({name,avatar:avatar}))
                setName('')
            }else {
                setError('Title is required')
            }
        }

    const editModeOnHandler = () => {
        setEditMode(true)
        setName(userName)
    }

    const onChangeTitleHandler = (e:ChangeEvent<HTMLInputElement>) => {
        setName(e.currentTarget.value)
        setError(null)
    }

    return (
        <>
            {editMode ? (
                <TextField
                    value={name}
                    onChange={onChangeTitleHandler}
                    autoFocus
                    error={!!error}
                    helperText={!!error && error}
                    onBlur={editModeOffHandler}
                    variant="standard"
                    label="Nickname"
                    style={{ width: '300px' }}
                    InputProps={{
                        endAdornment: (
                            <Button
                                onMouseDown={editModeOffHandler}
                                style={{ marginBottom: '5px', fontSize: '12px' }}
                                size="small"
                                variant="contained"
                            >
                                Save
                            </Button>
                        ),
                    }}
                />
            ) : (
                <div>
                    <span onDoubleClick={editModeOnHandler}>{userName}</span>
                    <span style={{ marginLeft: '10px', cursor: 'pointer' }} onClick={editModeOnHandler}>
            <BorderColorIcon />
          </span>
                </div>
            )}
        </>
    );
};