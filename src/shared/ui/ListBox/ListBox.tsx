import { Fragment, type ReactNode } from 'react'
import { Listbox as HListbox } from '@headlessui/react'
import styles from './ListBox.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import { Button } from '../Button/Button'
import { HStack } from '../Stack'
import { type DropdownDirection } from 'shared/types/ui'

export interface ListBoxItem {
    value: string
    content: ReactNode
    unavailable?: boolean
}

interface ListBoxProps {
    items?: ListBoxItem[]
    className?: string
    value?: string
    defaultValue?: string
    onChange: <T extends string>(value: T) => void
    label?: string
    readonly?: boolean
    direction?: DropdownDirection
}

const mapDirectionClass: Record<DropdownDirection, string> = {
    'bottom left': styles.optionsBottomLeft,
    'bottom right': styles.optionsBottomRight,
    'top left': styles.optionsTopLeft,
    'top right': styles.optionsTopRight
}

export const ListBox = (props: ListBoxProps) => {
    const {
        className,
        items,
        value,
        defaultValue,
        label,
        onChange,
        readonly,
        direction = 'bottom right'
    } = props

    return (
        <HStack gap="8">
            { label && label }
            <HListbox
                disabled={ readonly }
                as="div"
                className={ classNames(styles.ListBox, {}, [className]) }
                value={ value }
                onChange={ onChange }
            >
                <HListbox.Button as={ Button } disabled={ readonly }>
                    { value ?? defaultValue }
                </HListbox.Button>
                <HListbox.Options
                    className={
                        classNames(
                            styles.options,
                            {},
                            [mapDirectionClass[direction]]
                        )
                    }
                >
                    { items?.map((item) => (
                        <HListbox.Option
                            key={ item.value }
                            value={ item.value }
                            disabled={ item.unavailable }
                            as={ Fragment }
                        >
                            { ({ active, selected }) => (
                                <li
                                    className={ classNames(styles.item,
                                        {
                                            [styles.active]: active,
                                            [styles.disabled]: item.unavailable,
                                            [styles.selected]: selected
                                        })
                                    }
                                >
                                    { item.content }
                                </li>
                            ) }
                        </HListbox.Option>
                    )) }
                </HListbox.Options>
            </HListbox>
        </HStack>
    )
}
