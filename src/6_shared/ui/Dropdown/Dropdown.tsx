import { Menu } from '@headlessui/react'
import { Fragment, type ReactNode } from 'react'
import { classNames } from '../../lib/classNames/classNames'
import { type DropdownDirection } from '../../types/ui'
import { AppLink } from '../AppLink/AppLink'
import styles from './Dropdown.module.scss'

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
