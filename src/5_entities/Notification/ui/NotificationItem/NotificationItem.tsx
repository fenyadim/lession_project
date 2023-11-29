import { memo } from 'react'
import { classNames } from '@/6_shared/lib/classNames/classNames'
import { Card } from '@/6_shared/ui/Card/Card'
import { Text } from '@/6_shared/ui/Text/Text'
import { type NotificationType } from '../../model/types/notification'
import styles from './NotificationItem.module.scss'

interface NotificationItemProps {
    className?: string
    item: NotificationType
}

export const NotificationItem = memo((props: NotificationItemProps) => {
    const { className, item } = props

    const content = (
        <Card theme='invertedOutline' className={classNames(styles.NotificationItem, {}, [className])}>
            <Text text={item.description} title={item.title}/>
        </Card>
    )

    if (item.href) {
        return (
            <a className={styles.link} target='_blank' href={item.href} rel="noreferrer">
                <Card theme='invertedOutline' className={classNames(styles.NotificationItem, {}, [className])}>
                    <Text text={item.description} title={item.title}/>
                </Card>
            </a>
        )
    }

    return content
})

NotificationItem.displayName = 'NotificationItem'
