import { memo, useCallback, useState } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import styles from './Navbar.module.scss'
import { Button } from 'shared/ui/Button/Button'
import { useTranslation } from 'react-i18next'
import { LoginModal } from 'features/AuthByUsername'
import { useDispatch, useSelector } from 'react-redux'
import { getUserAuthData, userActions } from 'entities/User'
import { Text } from 'shared/ui/Text/Text'
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink'
import { RoutePath } from 'shared/config/routeConfig/routeConfig'

interface NavbarProps {
    className?: string
}

export const Navbar = memo((props: NavbarProps) => {
    const { className } = props

    const { t } = useTranslation()
    const [isAuthModal, setIsAuthModal] = useState(false)
    const authData = useSelector(getUserAuthData)
    const dispatch = useDispatch()

    const onCloseModal = useCallback((): void => {
        setIsAuthModal(false)
    }, [])

    const onShowModal = useCallback((): void => {
        setIsAuthModal(true)
    }, [])

    const onLogout = useCallback((): void => {
        dispatch(userActions.logout())
    }, [dispatch])

    if (authData) {
        return (
            <header className={ classNames(styles.Navbar, {}, [className]) }>
                <Text
                    theme="inverted"
                    className={ styles.appName }
                    title="My App"
                />
                <AppLink
                    theme={ AppLinkTheme.INVERTED }
                    to={ RoutePath.article_create }
                >
                    { t('Создать статьи') }
                </AppLink>
                <Button
                    theme="clear"
                    className={ styles.links }
                    onClick={ onLogout }
                >
                    { t('Выйти') }
                </Button>
            </header>
        )
    }

    return (
        <header className={ classNames(styles.Navbar, {}, [className]) }>
            <Button
                theme="clear"
                className={ styles.links }
                onClick={ onShowModal }
            >
                { t('Войти') }
            </Button>
            { isAuthModal &&
                <LoginModal isOpen={ isAuthModal } onClose={ onCloseModal }/> }
        </header>
    )
})

Navbar.displayName = 'Navbar'
