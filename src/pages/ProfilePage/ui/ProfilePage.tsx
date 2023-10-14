import { memo, useCallback, useEffect } from 'react'
import { DynamicModuleLoader, type ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { useSelector } from 'react-redux'
import { ProfilePageHeader } from './ProfilePageHeader/ProfilePageHeader'
import { Text } from 'shared/ui/Text/Text'
import { useTranslation } from 'react-i18next'
import { fetchProfileData, getProfileError, getProfileForm, getProfileIsLoading, getProfileReadonly, getProfileValidateErrors, profileActions, profileReducer, ValidateProfileError } from 'features/EditableProfileCard'
import { ProfileCard } from 'entities/Profile'

interface ProfilePageProps {
    className?: string
}

const reducers: ReducersList = {
    profile: profileReducer
}

const ProfilePage = memo((props: ProfilePageProps) => {
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

    useEffect(() => {
        void dispatch(fetchProfileData())
    }, [dispatch])

    const onChangeProfile = useCallback(
        (name: string, value: string | number) => {
            dispatch(profileActions.updateProfile({
                [name]: value
            }))
        }, [dispatch])

    return (
        <DynamicModuleLoader reducers={ reducers } removeAfterUnmount>
            <div>
                <ProfilePageHeader/>
                { validateErrors?.length && validateErrors.map((err) => (
                    <Text
                        key={ err }
                        theme="error"
                        text={ validateErrorTranslates[err] }
                    />
                )) }
                <ProfileCard
                    data={ formData }
                    isLoading={ isLoading }
                    error={ error }
                    onChangeProfile={ onChangeProfile }
                    readonly={ readonly }
                />
            </div>
        </DynamicModuleLoader>
    )
})

ProfilePage.displayName = 'ProfilePage'

export default ProfilePage
