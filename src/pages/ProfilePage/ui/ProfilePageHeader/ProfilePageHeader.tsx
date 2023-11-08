import { type FC, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'
import { Text } from 'shared/ui/Text/Text'
import { Button } from 'shared/ui/Button/Button'
import { useSelector } from 'react-redux'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { getProfileData, getProfileReadonly, profileActions, updateProfileData } from 'features/EditableProfileCard'
import { getUserAuthData } from 'entities/User'
import { HStack } from 'shared/ui/Stack'

interface ProfilePageHeaderProps {
    className?: string
}

export const ProfilePageHeader: FC<ProfilePageHeaderProps> = (props) => {
    const { className } = props

    const { t } = useTranslation('profile')
    const readonly = useSelector(getProfileReadonly)
    const dispatch = useAppDispatch()
    const authData = useSelector(getUserAuthData)
    const profileData = useSelector(getProfileData)
    const canEdit = profileData?.id === authData?.id

    const onEdit = useCallback(() => {
        dispatch(profileActions.setReadonly(false))
    }, [dispatch])

    const onCancelEdit = useCallback(() => {
        dispatch(profileActions.cancelEdit())
    }, [dispatch])

    const onSave = useCallback(() => {
        void dispatch(updateProfileData())
    }, [dispatch])

    return (
        <HStack
            max
            justify="between"
            className={ classNames('', {}, [className]) }
        >
            <Text title={ t('Профиль') }/>
            { canEdit && (
                <div>
                    { readonly
                        ? (
                            <Button
                                theme="outline"
                                onClick={ onEdit }
                            >
                                { t('Редактировать') }
                            </Button>
                        )
                        : (
                            <HStack gap="8">
                                <Button
                                    theme="outline_red"
                                    onClick={ onCancelEdit }
                                >
                                    { t('Отменить') }
                                </Button>
                                <Button
                                    theme="outline"
                                    onClick={ onSave }
                                >
                                    { t('Сохранить') }
                                </Button>
                            </HStack>
                        )
                    }
                </div>
            ) }

        </HStack>
    )
}
