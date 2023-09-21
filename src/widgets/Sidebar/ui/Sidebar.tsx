import { type FC, useState } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { Button } from 'shared/ui/Button/Button'
import { ThemeSwitcher } from 'widgets/ThemeSwitcher'
import { LangSwitcher } from 'widgets/LangSwitcher/ui/LangSwitcher'
import styles from './Sidebar.module.scss'

interface SidebarProps {
    className?: string
}

export const Sidebar: FC<SidebarProps> = (props) => {
    const { className } = props

    const [collapsed, setCollapsed] = useState(false)

    const toggleCollapsed = (): void => {
        setCollapsed(prev => !prev)
    }

    return (
        <div data-testid="sidebar" className={ classNames(styles.Sidebar,
            { [styles.collapsed]: collapsed }, [className]) }>
            <Button data-testid="sidebar-toggle"
                    onClick={ toggleCollapsed }>Toggle</Button>
            <div className={ styles.switchers }>
                <ThemeSwitcher/>
                <LangSwitcher/>
            </div>
        </div>
    )
}
