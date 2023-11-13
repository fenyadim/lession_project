import { Menu } from '@headlessui/react'
import { classNames } from '6_shared/lib/classNames/classNames'
import styles from './Dropdown.module.scss'
import { Fragment, type ReactNode } from 'react'
import { type DropdownDirection } from '6_shared/types/ui'
import { AppLink } from '../AppLink/AppLink'

export interface DropdownItem {
    disabled?: boolean
    content?: ReactNode
    onClick?: () => void
    href?: string
}

interface DropdownProps {
    className?: string
    items: DropdownItem[]
    trigger: ReactNode
    direction?: DropdownDirection
}

const mapDirectionClass: Record<DropdownDirection, string> = {
    'bottom left': styles.optionsBottomLeft,
    'bottom right': styles.optionsBottomRight,
    'top left': styles.optionsTopLeft,
    'top right': styles.optionsTopRight
}

export const Dropdown = (props: DropdownProps) => {
    const {
        className,
        items,
        trigger,
        direction = 'bottom right'
    } = props

    return (
        <Menu
            as="div"
            className={ classNames(
                styles.Dropdown,
                {},
                [className]
            ) }
        >
            <Menu.Button
                className={ styles.btn }
            >
                { trigger }
            </Menu.Button>
            <Menu.Items
                as={ 'div' }
                className={ classNames(
                    styles.menu,
                    {},
                    [mapDirectionClass[direction]])
                }>
                { items.map((item, index) => {
                    const content = ({ active }: { active: boolean }) => (
                        <button
                            type="button"
                            disabled={ item.disabled }
                            onClick={ item.onClick }
                            className={ classNames(
                                styles.item,
                                { [styles.active]: active },
                                []
                            ) }
                        >
                            { item.content }
                        </button>
                    )

                    if (item.href) {
                        return (
                            <Menu.Item
                                key={ index }
                                as={ AppLink }
                                to={ item.href }
                                disabled={ item.disabled }
                            >
                                { content }
                            </Menu.Item>
                        )
                    }

                    return (
                        <Menu.Item
                            key={ index }
                            as={ Fragment }
                            disabled={ item.disabled }
                        >
                            { content }
                        </Menu.Item>
                    )
                }) }
            </Menu.Items>
        </Menu>
    )
}
