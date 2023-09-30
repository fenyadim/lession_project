import { type ChangeEvent, type InputHTMLAttributes, memo, useEffect, useRef, useState } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import styles from './Input.module.scss'

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'placeholder'>

interface InputProps extends HTMLInputProps {
    className?: string
    value?: string
    onChange?: (value: string) => void
    placeholder?: string
    autofocus?: boolean
}

export const Input = memo((props: InputProps) => {
    const {
        className,
        value,
        type = 'text',
        placeholder,
        onChange,
        autofocus,
        ...otherProps
    } = props

    const [focus, setFocus] = useState(false)
    const ref = useRef<HTMLInputElement>(null)

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value)
    }

    const onFocus = (): void => {
        setFocus(true)
    }

    const onBlur = () => {
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

    return (
        <div className={ classNames(styles.input_wrapper, {}, [className]) }>
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
                className={ classNames(styles.Input, {}, []) }
                value={ value }
                onChange={ onChangeHandler }
                onFocus={ onFocus }
                onBlur={ onBlur }
                { ...otherProps }
            />
        </div>
    )
})

Input.displayName = 'Input'
