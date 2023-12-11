import { memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import { getUserAuthData, isUserAdmin, isUserManager, userActions } from '@/5_entities/User'
import { getRouteAdmin, getRouteProfile } from '@/6_shared/const/router'
import { classNames } from '@/6_shared/lib/classNames/classNames'
import { Avatar } from '@/6_shared/ui/Avatar/Avatar'
import { Dropdown } from '@/6_shared/ui/Popups'

interface AvatarDropdownProps {
    className?: string
}

export const AvatarDropdown = memo((props: AvatarDropdownProps) => {
    const { className } = props

    const { t } = useTranslation()
    const authData = useSelector(getUserAuthData)
    const isAdmin = useSelector(isUserAdmin)
    const isManager = useSelector(isUserManager)
    const dispatch = useDispatch()

    const isAdminPanelAvailable = isAdmin || isManager

    const onLogout = useCallback((): void => {
        dispatch(userActions.logout())
    }, [dispatch])

    if (!authData) return null

    return (
        <Dropdown
            className={classNames('', {}, [className])}
            direction="bottom left"
            items={[
                ...(isAdminPanelAvailable
                    ? [
                        {
                            content: t('Админ панель'),
                            href: getRouteAdmin()
                        }
                    ]
                    : []),
                {
                    content: t('Профиль'),
                    href: getRouteProfile(authData.id)
                },
                {
                    content: t('Выйти'),
                    onClick: onLogout
                }
            ]}
            trigger={
                <Avatar size={30}
                    src={authData.avatar as string}/>
            }
        />
    )
})

AvatarDropdown.displayName = 'AvatarDropdown'
