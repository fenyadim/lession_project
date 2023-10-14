import { type ChangeEvent, memo, useMemo } from 'react'
import { classNames, type ModsType } from 'shared/lib/classNames/classNames'
import styles from './Select.module.scss'

export interface SelectOptions {
    value: string
    content: string
}

interface SelectProps {
    className?: string
    label?: string
    options?: SelectOptions[]
    value?: string
    onChange?: (value: string, name?: string) => void
    readonly?: boolean
    name?: string
}

export const Select = memo((props: SelectProps) => {
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

    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        onChange?.(e.target.value, e.target.name)
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
})

Select.displayName = 'Select'
