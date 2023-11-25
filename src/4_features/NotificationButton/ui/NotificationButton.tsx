import { memo } from 'react'
import { NotificationList } from '5_entities/Notification'
import NotificationIcon from '6_shared/assets/icons/notice.svg'
import { classNames } from '6_shared/lib/classNames/classNames'
import { Button } from '6_shared/ui/Button/Button'
import { Icon } from '6_shared/ui/Icon/Icon'
import { Popover } from '6_shared/ui/Popups'
import styles from './NotificationButton.module.scss'

interface NotificationButtonProps {
    className?: string
}

export const NotificationButton = memo((props: NotificationButtonProps) => {
    const { className } = props

    return (
        <Popover
            className={classNames('', {}, [className])}
            direction='bottom left'
            trigger={(
                <Button theme='clear'>
                    <Icon Svg={NotificationIcon} inverted/>
                </Button>
            )}
        >
            <NotificationList className={styles.notifications}/>
        </Popover>
    )
})

NotificationButton.displayName = 'NotificationButton'
