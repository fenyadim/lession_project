import { type FC, useState } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { ThemeSwitcher } from 'widgets/ThemeSwitcher'
import styles from './Sidebar.module.scss'
import { LangSwitcher } from 'widgets/LangSwitcher/ui/LangSwitcher'

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
        <div className={classNames(styles.Sidebar, { [styles.collapsed]: collapsed }, [className])}>
            <button onClick={toggleCollapsed}>Toggle</button>
            <div className={styles.switchers}>
                <ThemeSwitcher/>
                <LangSwitcher />
            </div>
        </div>
  )
}
