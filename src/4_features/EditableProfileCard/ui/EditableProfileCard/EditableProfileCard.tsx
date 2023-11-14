import { memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { ProfileCard } from '5_entities/Profile'
import { classNames } from '6_shared/lib/classNames/classNames'
import {
    DynamicModuleLoader,
    type ReducersList
} from '6_shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import {
    useAppDispatch
} from '6_shared/lib/hooks/useAppDispatch/useAppDispatch'
import {
    useInitialEffect
} from '6_shared/lib/hooks/useInitialEffect/useInitialEffect'
import { VStack } from '6_shared/ui/Stack'
import { Text } from '6_shared/ui/Text/Text'
import {
    getProfileError
} from '../../model/selectors/getProfileError/getProfileError'
import {
    getProfileForm
} from '../../model/selectors/getProfileForm/getProfileForm'
import {
    getProfileIsLoading
} from '../../model/selectors/getProfileIsLoading/getProfileIsLoading'
import {
    getProfileReadonly
} from '../../model/selectors/getProfileReadonly/getProfileReadonly'
import {
    getProfileValidateErrors
} from '../../model/selectors/getProfileValidateErrors/getProfileValidateErrors'
import {
    fetchProfileData
} from '../../model/service/fetchProfileData/fetchProfileData'
import { profileActions, profileReducer } from '../../model/slice/profileSlice'
import { type Profile, ValidateProfileError } from '../../model/types/profile'
import {
    EditableProfileCardHeader
} from '../EditableProfileCardHeader/EditableProfileCardHeader'
import styles from './EditableProfileCard.module.scss'

interface EditableProfileCardProps {
    className?: string
    id?: string
}

const reducers: ReducersList = {
    profile: profileReducer
}

export const EditableProfileCard = memo((props: EditableProfileCardProps) => {
    const { className, id } = props

    const { t } = useTranslation('profile')
    const dispatch = useAppDispatch()
    const formData = useSelector(getProfileForm)
    const isLoading = useSelector(getProfileIsLoading)
    const error = useSelector(getProfileError)
    const readonly = useSelector(getProfileReadonly)
    const validateErrors = useSelector(getProfileValidateErrors)

    const validateErrorTranslates: Record<ValidateProfileError, string> = {
        [ValidateProfileError.SERVER_ERROR]: t(
            'Серверная ошибка при сохранении'),
        [ValidateProfileError.INCORRECT_USERDATA]: t(
            'Имя и фамилия обязательны'),
        [ValidateProfileError.INCORRECT_CITY]: t('Некорректный город'),
        [ValidateProfileError.NO_DATA]: t('Данные не указаны')
    }

    useInitialEffect(() => {
        if (id) {
            void dispatch(fetchProfileData(id))
        }
    })

    const onChangeProfile = useCallback(
        (value: string | number, name: keyof Profile) => {
            dispatch(profileActions.updateProfile({
                [name]: value
            }))
        }, [dispatch])

    return (
        <DynamicModuleLoader reducers={ reducers }>
            <VStack
                gap="8"
                max
                className={ classNames(styles.EditableProfileCard, {},
                    [className]) }
            >
                <EditableProfileCardHeader/>
                { validateErrors?.length && validateErrors.map((err) => (
                    <Text
                        key={ err }
                        theme="error"
                        text={ validateErrorTranslates[err] }
                        data-testid="EditableProfileCard.Error"
                    />
                )) }
                <ProfileCard
                    data={ formData }
                    isLoading={ isLoading }
                    error={ error }
                    onChangeProfile={ onChangeProfile }
                    readonly={ readonly }
                />
            </VStack>
        </DynamicModuleLoader>
    )
})

EditableProfileCard.displayName = 'EditableProfileCard'
