import { memo, type ReactNode } from 'react'
import { useTranslation } from 'react-i18next'
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink'
import { type SidebarItemType } from '../../model/items'
import { classNames } from 'shared/lib/classNames/classNames'
import styles from './SidebarItem.module.scss'

interface SidebarItemProps {
    item?: SidebarItemType
    collapsed: boolean
    children?: ReactNode
}

export const SidebarItem = memo((props: SidebarItemProps) => {
    const { item, collapsed } = props

    const { t } = useTranslation()

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
