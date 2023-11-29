import { memo, type ReactNode } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { getUserAuthData } from '@/5_entities/User'
import { classNames } from '@/6_shared/lib/classNames/classNames'
import { AppLink, AppLinkTheme } from '@/6_shared/ui/AppLink/AppLink'
import { type SidebarItemType } from '../../model/types/sidebar'
import styles from './SidebarItem.module.scss'

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
