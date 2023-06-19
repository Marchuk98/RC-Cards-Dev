import { ChangeEvent, FC, memo, useEffect, useState } from 'react'

import { PhotoCamera } from '@mui/icons-material'
import IconButton from '@mui/material/IconButton'
import { useForm } from 'react-hook-form'
import {CustomSelect} from "../../../../common/components/CustomSelect/CustomSelect.tsx";
import {ImageCover} from "../../../../common/components/ImageCover/ImageCover.tsx";
import {InputWithValue} from "../../../../common/components/InputWithValue/InputWithValue.tsx";
import {BasicModal} from "../../../../common/components/Modal/BasicModal/BasicModal.tsx";
import {ModalsButtons} from "../../../../common/components/Modal/ModalsButtons/ModalsButtons.tsx";
import {uploadImageHandler} from "../../../../common/utils/convert-base64.ts";
import {useModals} from "../../../modals/hooks/useModals.ts";


type ModalsFormsType = {
    open: boolean
    title: string
    disabled: boolean
    answerImg?: string
    questionImg?: string
    callback: (data: any) => void
}

export const CommonModal: FC<ModalsFormsType> = memo(
    ({ open, title, disabled, callback, answerImg, questionImg }) => {
        const {
            closeModal,
            setQuestionImg,
            setAnswerImg,
            removeImages,
            data: { answer, question },
        } = useModals()

        const { handleSubmit, register, reset } = useForm<{
            question: string
            answer: string
        }>()

        const [type, setType] = useState<'text' | 'picture'>('text')

        const onChangeQuestionImg = (event: ChangeEvent<HTMLInputElement>) => {
            if (type === 'picture') {
                uploadImageHandler(event, setQuestionImg)
            }
        }

        const onChangeAnswerImg = (event: ChangeEvent<HTMLInputElement>) => {
            if (type === 'picture') {
                uploadImageHandler(event, setAnswerImg)
            }
        }

        useEffect(() => {
            if (answer || question) return
            reset()
        }, [open])

        return (
            <BasicModal open={open} title={title} onClose={closeModal}>
                <form onSubmit={handleSubmit(callback)}>
                    <CustomSelect type={type} setType={setType} />
                    {type === 'text' && (
                        <>
                            <InputWithValue
                                label={'Question'}
                                value={question}
                                name={'question'}
                                register={register}
                            />
                            <InputWithValue label={'Answer'} value={answer} name={'answer'} register={register} />
                        </>
                    )}
                    {type === 'picture' && (
                        <>
                            <>
                                <IconButton color="primary" aria-label="upload picture" component="label">
                                    <input
                                        hidden
                                        accept="image/png, image/jpeg"
                                        type="file"
                                        onChange={onChangeQuestionImg}
                                    />
                                    <PhotoCamera />
                                </IconButton>
                                {questionImg && (
                                    <ImageCover height={'100px'} width={'150px'} deckCover={questionImg} />
                                )}
                            </>
                            <>
                                <IconButton color="primary" aria-label="upload picture" component="label">
                                    <input
                                        hidden
                                        accept="image/png, image/jpeg"
                                        type="file"
                                        onChange={onChangeAnswerImg}
                                    />
                                    <PhotoCamera />
                                </IconButton>
                                {answerImg && (
                                    <IconButton onClick={removeImages({ isAnswer: true })}>Delete</IconButton>
                                )}
                                {answerImg && <ImageCover deckCover={answerImg} height={'100px'} width={'150px'} />}
                            </>
                        </>
                    )}
                    <ModalsButtons title={'Save'} callbackCancel={closeModal} disabled={disabled} />
                </form>
            </BasicModal>
        )
    }
)
