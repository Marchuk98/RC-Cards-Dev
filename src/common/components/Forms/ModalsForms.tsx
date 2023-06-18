import {ChangeEvent} from "react";
import {uploadImageHandler} from "../../utils/convert-base64.ts";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import {PhotoCamera} from "@mui/icons-material";
import {ImageCover} from "../ImageCover/ImageCover.tsx";
import {InputWithValue} from "../InputWithValue/InputWithValue.tsx";
import {ValidError} from  "../validError/ValidError.tsx"
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import DeleteIcon from '@mui/icons-material/Delete'
import {ModalsButtons} from "../Modal/ModalsButtons/ModalsButtons.tsx";
import {useScheme} from "../hooks/useScheme.tsx";

type ModalsFormsType = {
    name: string
    deckCover?: string
    disabled: boolean
    closeModal: () => void
    callback: <D>(data: D) => void
    setDeckCover: (image: string) => void
    removeCover: (data: { isDeckCover?: boolean }) => () => void
}

export const ModalsForms = ({
                                                     name,
                                                     callback,
                                                     closeModal,
                                                     disabled,
                                                     deckCover,
                                                     setDeckCover,
                                                     removeCover,
                                                 }:ModalsFormsType) => {
    const {
        handleSubmit,
        register,
        errorsMessages: { nameError },
    } = useScheme(['name'])

    const onChangeCover = (event: ChangeEvent<HTMLInputElement>) => {
        uploadImageHandler(event, setDeckCover)
    }

    return (
        <form onSubmit={handleSubmit(callback)}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <IconButton
                    disabled={disabled}
                    color="primary"
                    aria-label="upload picture"
                    component="label"
                >
                    <input hidden accept="image/png, image/jpeg" type="file" onChange={onChangeCover} />
                    <PhotoCamera />
                </IconButton>
                {deckCover && (
                    <IconButton
                        color="primary"
                        disabled={disabled}
                        onClick={removeCover({ isDeckCover: true })}
                    >
                        <DeleteIcon />
                    </IconButton>
                )}
            </Box>
            <ImageCover deckCover={deckCover} />
            <InputWithValue label={'Pack name'} value={name} name={'name'} register={register} />
            {nameError && <ValidError>{nameError}</ValidError>}
            <FormControlLabel
                sx={{ marginBottom: '30px' }}
                control={<Checkbox {...register('private')} />}
                label="Private pack"
            />
            <ModalsButtons title={'Save'} callbackCancel={closeModal} disabled={disabled} />
        </form>
    )
}