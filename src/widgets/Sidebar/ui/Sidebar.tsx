import { type FC, useState } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { Button } from 'shared/ui/Button/Button'
import { ThemeSwitcher } from 'widgets/ThemeSwitcher'
import { LangSwitcher } from 'widgets/LangSwitcher/ui/LangSwitcher'
import styles from './Sidebar.module.scss'
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink'
import { useTranslation } from 'react-i18next'
import { RoutePath } from 'shared/config/routeConfig/routeConfig'
import MainIcon from 'shared/assets/icons/main.svg'
import AboutIcon from 'shared/assets/icons/about.svg'

interface SidebarProps {
    className?: string
}

export const Sidebar: FC<SidebarProps> = (props) => {
    const { className } = props

    const [collapsed, setCollapsed] = useState(false)

    const { t } = useTranslation()

    const toggleCollapsed = (): void => {
        setCollapsed(prev => !prev)
    }

    return (
        <div data-testid="sidebar" className={ classNames(styles.Sidebar,
            { [styles.collapsed]: collapsed }, [className]) }>
            <Button
                data-testid="sidebar-toggle"
                theme="backgroundInverted"
                className={ styles.collapsedBtn }
                onClick={ toggleCollapsed }
                size="l"
                square
            >
                { collapsed ? '>' : '<' }
            </Button>
            <div className={ styles.items }>
                <AppLink
                    theme={ AppLinkTheme.INVERTED }
                    to={ RoutePath.main }
                    className={ styles.item }
                >
                    <MainIcon className={ styles.icon }/>
                    <span className={ styles.link }>{ t('Главная') }</span>
                </AppLink>
                <AppLink
                    className={ styles.item }
                    theme={ AppLinkTheme.INVERTED }
                    to={ RoutePath.about }
                >
                    <AboutIcon className={ styles.icon }/>
                    <span className={ styles.link }>{ t('О сайте') }</span>
                </AppLink>
            </div>
            <div className={ styles.switchers }>
                <ThemeSwitcher/>
                <LangSwitcher isShort={ collapsed }/>
            </div>
        </div>
    )
}
