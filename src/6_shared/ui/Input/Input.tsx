import { type ChangeEvent, type InputHTMLAttributes, useEffect, useRef, useState } from 'react'
import { classNames, type ModsType } from '../../lib/classNames/classNames'
import styles from './Input.module.scss'

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'placeholder' | 'readOnly'>

interface InputProps<T extends string> extends HTMLInputProps {
    className?: string
    value?: string | number
    onChange?: (value: string, name: T) => void
    placeholder?: string
    autofocus?: boolean
    readonly?: boolean
}

export const Input = <T extends string> (props: InputProps<T>) => {
    const {
        className,
        value,
        type = 'text',
        placeholder,
        onChange,
        autofocus,
        readonly,
        name = placeholder,
        ...otherProps
    } = props

    const [focus, setFocus] = useState(false)
    const ref = useRef<HTMLInputElement>(null)

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>): void => {
        if (e.target.name) {
            onChange?.(e.target.value, e.target.name as T)
        }
        onChange?.(e.target.value, '' as T)
    }

    const onFocus = (): void => {
        setFocus(true)
    }

    const onBlur = (): void => {
        if (!value) {
            setFocus(false)
        }
    }

    useEffect(() => {
        if (value && !focus) {
            setFocus(true)
        }
    }, [value, focus])

    useEffect(() => {
        if (autofocus) {
            setFocus(true)
            ref.current?.focus()
        }
    }, [autofocus])

    const mods: ModsType = {
        [styles.readonly]: readonly
    }

    return (
        <div className={ classNames(styles.input_wrapper, mods, [className]) }>
            <label
                htmlFor={ placeholder }
                className={ classNames(styles.label, { [styles.focus]: focus },
                    []) }
            >
                { placeholder }
            </label>
            <input
                ref={ ref }
                id={ placeholder }
                type={ type }
                name={ name }
                className={ classNames(styles.Input, {}, []) }
                value={ value }
                onChange={ onChangeHandler }
                onFocus={ onFocus }
                onBlur={ onBlur }
                readOnly={ readonly }
                { ...otherProps }
            />
        </div>
    )
}
