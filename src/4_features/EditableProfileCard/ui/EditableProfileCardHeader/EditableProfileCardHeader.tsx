import { memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { getUserAuthData } from '@/5_entities/User'
import { classNames } from '@/6_shared/lib/classNames/classNames'
import { useAppDispatch } from '@/6_shared/lib/hooks/useAppDispatch/useAppDispatch'
import { Button } from '@/6_shared/ui/Button/Button'
import { HStack } from '@/6_shared/ui/Stack'
import { Text } from '@/6_shared/ui/Text/Text'
import { getProfileData } from '../../model/selectors/getProfileData/getProfileData'
import { getProfileReadonly } from '../../model/selectors/getProfileReadonly/getProfileReadonly'
import { updateProfileData } from '../../model/service/updateProfileData/updateProfileData'
import { profileActions } from '../../model/slice/profileSlice'

interface EditableProfileCardHeaderProps {
    className?: string
}

export const EditableProfileCardHeader = memo(
    (props: EditableProfileCardHeaderProps) => {
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
                                    data-testid="EditableProfileCardHeader.EditButton"
                                >
                                    { t('Редактировать') }
                                </Button>
                            )
                            : (
                                <HStack gap="8">
                                    <Button
                                        theme="outline_red"
                                        onClick={ onCancelEdit }
                                        data-testid="EditableProfileCardHeader.CancelButton"
                                    >
                                        { t('Отменить') }
                                    </Button>
                                    <Button
                                        theme="outline"
                                        onClick={ onSave }
                                        data-testid="EditableProfileCardHeader.SaveButton"
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
    })

EditableProfileCardHeader.displayName = 'EditableProfileCardHeader'
