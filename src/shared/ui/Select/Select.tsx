import { type ChangeEvent, useMemo } from 'react'
import { classNames, type ModsType } from 'shared/lib/classNames/classNames'
import styles from './Select.module.scss'

export interface SelectOptions<T extends string> {
    value: T
    content: string
}

interface SelectProps<T extends string> {
    className?: string
    label?: string
    options?: Array<SelectOptions<T>>
    value?: T
    onChange?: (value: T, name?: string) => void
    readonly?: boolean
    name?: string
}

export const Select = <T extends string> (props: SelectProps<T>) => {
    const {
        className,
        label,
        options,
        value,
        onChange,
        readonly,
        name = label
    } = props

    const optionsList = useMemo(() => {
        return options?.map((opt) => (
            <option
                key={ opt.value }
                className={ styles.option }
                value={ opt.value }
            >
                { opt.content }
            </option>
        ))
    }, [options])

    const mods: ModsType = {}

    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>): void => {
        onChange?.(e.target.value as T, e.target.name)
    }
    return (
        <div className={ classNames(styles.Wrapper, mods, [className]) }>
            { label && (
                <span className={ styles.label }>
                    { label }
                </span>
            ) }
            <select
                disabled={ readonly }
                className={ styles.select }
                value={ value }
                onChange={ onChangeHandler }
                name={ name }
            >
                { optionsList }
            </select>
        </div>
    )
}
