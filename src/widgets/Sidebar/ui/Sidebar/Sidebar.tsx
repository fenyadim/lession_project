import { memo, useState } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { Button } from 'shared/ui/Button/Button'
import { ThemeSwitcher } from 'widgets/ThemeSwitcher'
import { LangSwitcher } from 'widgets/LangSwitcher'
import { SidebarItem } from '../SidebarItem/SidebarItem'
import { SidebarItemsList } from '../../model/items'
import styles from './Sidebar.module.scss'

interface SidebarProps {
    className?: string
}

export const Sidebar = memo((props: SidebarProps) => {
    const { className } = props

    const [collapsed, setCollapsed] = useState(false)
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
                { SidebarItemsList.map((item) => (
                    <SidebarItem
                        key={ item.path }
                        item={ item }
                        collapsed={ collapsed }
                    />
                )) }
            </div>
            <div className={ styles.switchers }>
                <ThemeSwitcher/>
                <LangSwitcher isShort={ collapsed }/>
            </div>
        </div>
    )
})

Sidebar.displayName = 'Sidebar'
