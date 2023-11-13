import { memo, useCallback } from 'react'
import { DynamicModuleLoader, type ReducersList } from '6_shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { useAppDispatch } from '6_shared/lib/hooks/useAppDispatch/useAppDispatch'
import { useSelector } from 'react-redux'
import { ProfilePageHeader } from './ProfilePageHeader/ProfilePageHeader'
import { Text } from '6_shared/ui/Text/Text'
import { useTranslation } from 'react-i18next'
import { fetchProfileData, getProfileError, getProfileForm, getProfileIsLoading, getProfileReadonly, getProfileValidateErrors, type Profile, profileActions, profileReducer, ValidateProfileError } from '4_features/EditableProfileCard'
import { ProfileCard } from '5_entities/Profile'
import { useInitialEffect } from '6_shared/lib/hooks/useInitialEffect/useInitialEffect'
import { useParams } from 'react-router-dom'
import { Page } from '3_widgets/Page/Page'
import { VStack } from '6_shared/ui/Stack'

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
    const { id } = useParams<{ id: string }>()

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
        <DynamicModuleLoader reducers={ reducers } removeAfterUnmount>
            <Page>
                <VStack max gap="16">
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
                </VStack>
            </Page>
        </DynamicModuleLoader>
    )
})

ProfilePage.displayName = 'ProfilePage'

export default ProfilePage
