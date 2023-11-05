import { type ReactNode, useCallback } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import styles from './Tabs.module.scss'
import { Card } from 'shared/ui/Card/Card'

export interface TabItem<T extends string> {
    value: T
    content: ReactNode
}

interface TabsProps<T extends string> {
    className?: string
    tabs: Array<TabItem<T>>
    value: T
    onTabClick: (tab: T) => void
}

export const Tabs = <T extends string> (props: TabsProps<T>) => {
    const { className, tabs, onTabClick, value } = props

    const onClickHandler = useCallback((tab: T) => {
        return () => {
            onTabClick(tab)
        }
    }, [onTabClick])

    return (
        <div className={ classNames(styles.Tabs, {}, [className]) }>
            { tabs.map(tab => (
                <Card
                    theme={ tab.value === value ? 'primary' : 'outline' }
                    className={ styles.tab }
                    key={ tab.value }
                    onClick={ onClickHandler(tab.value) }
                >
                    { tab.content }
                </Card>
            )) }
        </div>
    )
}
