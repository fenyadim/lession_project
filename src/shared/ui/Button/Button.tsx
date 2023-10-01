import { type ButtonHTMLAttributes, type FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import styles from './Button.module.scss'

type ButtonTheme = 'clear' | 'clearInverted' | 'outline' | 'background' | 'backgroundInverted'

type ButtonSize = 'm' | 'l' | 'xl'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string
    theme?: ButtonTheme
    square?: boolean
    size?: ButtonSize
    disabled?: boolean
}

export const Button: FC<ButtonProps> = (props) => {
    const {
        className,
        children,
        theme, square,
        size = 'm',
        disabled,
        ...otherProps
    } = props

    const mods: Record<string, boolean> = {
        [styles.square]: square,
        [styles.disabled]: disabled
    }

    return (
        <button
            className={ classNames(styles.Button, mods,
                [className, styles[theme], styles[size]]) }
            disabled={ disabled }
            { ...otherProps }
        >
            { children }
        </button>
    )
}
