import { Listbox as HListbox } from '@headlessui/react'
import { Fragment, type ReactNode } from 'react'
import { classNames } from '../../../../lib/classNames/classNames'
import { type DropdownDirection } from '../../../../types/ui'
import { Button } from '../../../Button/Button'
import { HStack } from '../../../Stack'
import { mapDirectionClass } from '../../styles/consts'
import popupStyles from '../../styles/popup.module.scss'
import styles from './ListBox.module.scss'

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
            {label && label}
            <HListbox
                disabled={readonly}
                as="div"
                className={classNames('', {}, [className, popupStyles.popup])}
                value={value}
                onChange={onChange}
            >
                <HListbox.Button as={Fragment}>
                    <Button disabled={readonly}>{value ?? defaultValue}</Button>
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
                    {items?.map((item) => (
                        <HListbox.Option
                            key={item.value}
                            value={item.value}
                            disabled={item.unavailable}
                            as={Fragment}
                        >
                            {({ active, selected }) => (
                                <li
                                    className={classNames(styles.item,
                                        {
                                            [popupStyles.active]: active,
                                            [popupStyles.disabled]: item.unavailable,
                                            [popupStyles.selected]: selected
                                        })
                                    }
                                >
                                    {item.content}
                                </li>
                            )}
                        </HListbox.Option>
                    ))}
                </HListbox.Options>
            </HListbox>
        </HStack>
    )
}
