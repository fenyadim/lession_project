import { memo, useState } from 'react'
import { BrowserView, MobileView } from 'react-device-detect'
import { NotificationList } from '5_entities/Notification'
import NotificationIcon from '6_shared/assets/icons/notice.svg'
import { classNames } from '6_shared/lib/classNames/classNames'
import { Button } from '6_shared/ui/Button/Button'
import { Drawer } from '6_shared/ui/Drawer/Drawer'
import { Icon } from '6_shared/ui/Icon/Icon'
import { Popover } from '6_shared/ui/Popups'
import styles from './NotificationButton.module.scss'

interface NotificationButtonProps {
    className?: string
}

export const NotificationButton = memo((props: NotificationButtonProps) => {
    const { className } = props

    const [isOpen, setIsOpen] = useState(false)

    const onOpenDrawer = (): void => {
        setIsOpen(true)
    }

    const onCloseDrawer = (): void => {
        setIsOpen(false)
    }

    const trigger = (
        <Button theme='clear' onClick={onOpenDrawer}>
            <Icon Svg={NotificationIcon} inverted/>
        </Button>
    )

    return (
        <div>
            <BrowserView>
                <Popover
                    className={classNames('', {}, [className])}
                    direction='bottom left'
                    trigger={trigger}
                >
                    <NotificationList className={styles.notifications}/>
                </Popover>
            </BrowserView>
            <MobileView>
                {trigger}
                <Drawer isOpen={isOpen} onClose={onCloseDrawer}>
                    <NotificationList/>
                </Drawer>
            </MobileView>
        </div>
    )
})

NotificationButton.displayName = 'NotificationButton'
