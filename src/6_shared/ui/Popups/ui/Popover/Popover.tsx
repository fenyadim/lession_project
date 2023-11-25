import { Popover as HPopover } from '@headlessui/react'
import { type ReactNode } from 'react'
import { classNames } from '../../../../lib/classNames/classNames'
import { type DropdownDirection } from '../../../../types/ui'
import { mapDirectionClass } from '../../styles/consts'
import popupStyles from '../../styles/popup.module.scss'
import styles from './Popover.module.scss'

interface PopoverProps {
    className?: string
    trigger: ReactNode
    direction?: DropdownDirection
    children: ReactNode
}

export const Popover = (props: PopoverProps) => {
    const {
        className,
        trigger,
        direction = 'bottom right',
        children
    } = props

    const menuClasses = [mapDirectionClass[direction]]

    return (
        <HPopover
            className={classNames(
                '',
                {},
                [className, popupStyles.popup]
            )}
        >
            <HPopover.Button className={popupStyles.trigger}>
                {trigger}
            </HPopover.Button>

            <HPopover.Panel className={classNames(styles.panel, {}, menuClasses)}>
                {children}
            </HPopover.Panel>
        </HPopover>
    )
}
