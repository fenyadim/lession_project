import { FC, useState } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import styles from './Sidebar.module.scss'
import { ThemeSwitcher } from "widgets/ThemeSwither";

interface SidebarProps {
    className?: string
}

export const Sidebar: FC<SidebarProps> = (props) => {
    const {className} = props

    const [collapsed, setCollapsed] = useState(false)

    const toggleCollapsed = () => {
        setCollapsed(prev => !prev)
    }

    return (
        <div className={classNames(styles.Sidebar, {[styles.collapsed]: collapsed}, [className])}>
            <button onClick={toggleCollapsed}>Toggle</button>
            <div className={styles.switchers}>
                <ThemeSwitcher/>
            </div>
        </div>
    )
}