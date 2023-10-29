import { memo, type ReactNode } from 'react'
import { useTranslation } from 'react-i18next'
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink'
import { classNames } from 'shared/lib/classNames/classNames'
import styles from './SidebarItem.module.scss'
import { useSelector } from 'react-redux'
import { getUserAuthData } from 'entities/User'
import { type SidebarItemType } from 'widgets/Sidebar/model/types/sidebar'

interface SidebarItemProps {
    item: SidebarItemType
    collapsed: boolean
    children?: ReactNode
}

export const SidebarItem = memo((props: SidebarItemProps) => {
    const { item, collapsed } = props

    const isAuth = useSelector(getUserAuthData)
    const { t } = useTranslation()

    if (item.authOnly && !isAuth) {
        return null
    }
    return (
        <AppLink
            theme={ AppLinkTheme.INVERTED }
            to={ item.path }
            className={ classNames(
                styles.item,
                { [styles.collapsed]: collapsed }) }
        >
            <item.Icon className={ styles.icon }/>
            <span className={ styles.link }>{ t(item.text) }</span>
        </AppLink>
    )
})

SidebarItem.displayName = 'SidebarItem'
