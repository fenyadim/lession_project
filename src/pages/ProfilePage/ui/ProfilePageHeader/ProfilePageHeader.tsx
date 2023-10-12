import { type FC, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'
import { Text } from 'shared/ui/Text/Text'
import { Button } from 'shared/ui/Button/Button'
import styles from './ProfilePageHeader.module.scss'
import { useSelector } from 'react-redux'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { getProfileReadonly, profileActions, updateProfileData } from 'features/EditableProfileCard'

interface ProfilePageHeaderProps {
    className?: string
}

export const ProfilePageHeader: FC<ProfilePageHeaderProps> = (props) => {
    const { className } = props

    const { t } = useTranslation('profile')
    const readonly = useSelector(getProfileReadonly)
    const dispatch = useAppDispatch()

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
        <div
            className={ classNames(styles.ProfilePageHeader, {}, [className]) }>
            <Text title={ t('Профиль') }/>
            { readonly
                ? (
                    <Button
                        theme="outline"
                        className={ styles.editBtn }
                        onClick={ onEdit }
                    >
                        { t('Редактировать') }
                    </Button>
                )
                : (
                    <>
                        <Button
                            theme="outline_red"
                            className={ styles.editBtn }
                            onClick={ onCancelEdit }
                        >
                            { t('Отменить') }
                        </Button>
                        <Button
                            theme="outline"
                            className={ styles.saveBtn }
                            onClick={ onSave }
                        >
                            { t('Сохранить') }
                        </Button>
                    </>
                )
            }
        </div>
    )
}
