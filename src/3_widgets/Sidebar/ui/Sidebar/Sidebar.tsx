import { memo, useState } from 'react'
import { useSelector } from 'react-redux'
import { LangSwitcher } from '@/4_features/LangSwitcher'
import { ThemeSwitcher } from '@/4_features/ThemeSwitcher'
import { classNames } from '@/6_shared/lib/classNames/classNames'
import { Button } from '@/6_shared/ui/Button/Button'
import { VStack } from '@/6_shared/ui/Stack'
import { getSidebarItems } from '../../model/selectors/getSidebarItems'
import { SidebarItem } from '../SidebarItem/SidebarItem'
import styles from './Sidebar.module.scss'

interface SidebarProps {
    className?: string
}

export const Sidebar = memo((props: SidebarProps) => {
    const { className } = props

    const sidebarItemsList = useSelector(getSidebarItems)

    const [collapsed, setCollapsed] = useState(false)
    const toggleCollapsed = (): void => {
        setCollapsed(prev => !prev)
    }

    return (
        <aside data-testid="sidebar" className={classNames(styles.Sidebar,
            { [styles.collapsed]: collapsed }, [className])}>
            <Button
                data-testid="sidebar-toggle"
                theme="backgroundInverted"
                className={styles.collapsedBtn}
                onClick={toggleCollapsed}
                size="l"
                square
            >
                {collapsed ? '>' : '<'}
            </Button>
            <VStack role="navigation" gap="8" className={styles.items}>
                {sidebarItemsList.map((item) => (
                    <SidebarItem
                        key={item.path}
                        item={item}
                        collapsed={collapsed}
                    />
                ))}
            </VStack>
            <div className={styles.switchers}>
                <ThemeSwitcher/>
                <LangSwitcher isShort={collapsed}/>
            </div>
        </aside>
    )
})

Sidebar.displayName = 'Sidebar'
