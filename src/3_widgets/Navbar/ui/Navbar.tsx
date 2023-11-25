import { memo, useCallback, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { LoginModal } from '4_features/AuthByUsername'
import { AvatarDropdown } from '4_features/AvatarDropdown'
import { NotificationButton } from '4_features/NotificationButton'
import { getUserAuthData } from '5_entities/User'
import { RoutePath } from '6_shared/config/routeConfig/routeConfig'
import { classNames } from '6_shared/lib/classNames/classNames'
import { AppLink, AppLinkTheme } from '6_shared/ui/AppLink/AppLink'
import { Button } from '6_shared/ui/Button/Button'
import { HStack } from '6_shared/ui/Stack'
import { Text } from '6_shared/ui/Text/Text'
import styles from './Navbar.module.scss'

interface NavbarProps {
    className?: string
}

export const Navbar = memo((props: NavbarProps) => {
    const { className } = props

    const { t } = useTranslation()
    const [isAuthModal, setIsAuthModal] = useState(false)
    const authData = useSelector(getUserAuthData)

    const onCloseModal = useCallback((): void => {
        setIsAuthModal(false)
    }, [])

    const onShowModal = useCallback((): void => {
        setIsAuthModal(true)
    }, [])

    if (authData) {
        return (
            <header className={classNames(styles.Navbar, {}, [className])}>
                <Text
                    theme="inverted"
                    className={styles.appName}
                    title="My App"
                />
                <AppLink
                    theme={AppLinkTheme.INVERTED}
                    to={RoutePath.article_create}
                >
                    {t('Создать статьи')}
                </AppLink>
                <HStack gap='16' className={styles.actions}>
                    <NotificationButton/>
                    <AvatarDropdown/>
                </HStack>
            </header>
        )
    }

    return (
        <header className={classNames(styles.Navbar, {}, [className])}>
            <Button
                theme="clear"
                className={styles.links}
                onClick={onShowModal}
            >
                {t('Войти')}
            </Button>
            {isAuthModal &&
                <LoginModal isOpen={isAuthModal} onClose={onCloseModal}/>}
        </header>
    )
})

Navbar.displayName = 'Navbar'
