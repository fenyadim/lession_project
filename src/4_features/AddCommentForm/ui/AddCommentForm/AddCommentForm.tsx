import { memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { classNames } from '6_shared/lib/classNames/classNames'
import { DynamicModuleLoader, type ReducersList } from '6_shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { useAppDispatch } from '6_shared/lib/hooks/useAppDispatch/useAppDispatch'
import { Button } from '6_shared/ui/Button/Button'
import { Input } from '6_shared/ui/Input/Input'
import { HStack } from '6_shared/ui/Stack'
import { getAddCommentFormText } from '../../model/selectors/addCommentFormSelectors'
import { addCommentFormActions, addCommentFormReducer } from '../../model/slices/addCommentFormSlice'
import styles from './AddCommentForm.module.scss'

export interface AddCommentFormProps {
    className?: string
    onSendComment: (text: string) => void
}

const reducers: ReducersList = {
    addCommentForm: addCommentFormReducer
}

const AddCommentForm = memo((props: AddCommentFormProps) => {
    const { className, onSendComment } = props

    const { t } = useTranslation()
    const text = useSelector(getAddCommentFormText)
    // const error = useSelector(getAddCommentFormError)
    const dispatch = useAppDispatch()

    const onCommentTextChange = useCallback((value: string) => {
        dispatch(addCommentFormActions.setText(value))
    }, [dispatch])

    const onSendHandler = useCallback(() => {
        onSendComment(text || '')
        onCommentTextChange('')
    }, [onCommentTextChange, onSendComment, text])

    return (
        <DynamicModuleLoader reducers={ reducers }>
            <HStack
                justify="between"
                max
                className={ classNames(styles.AddCommentForm, {},
                    [className]) }
            >
                <Input
                    className={ styles.input }
                    placeholder={ t('Введите текст комментария') }
                    value={ text }
                    onChange={ onCommentTextChange }
                />
                <Button
                    onClick={ onSendHandler }
                >
                    { t('Отправить') }
                </Button>
            </HStack>
        </DynamicModuleLoader>
    )
})

export default AddCommentForm

AddCommentForm.displayName = 'AddCommentForm'
