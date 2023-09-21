import { type ButtonHTMLAttributes, type FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import styles from './Button.module.scss'

type ButtonTheme = 'clear' | 'outline' | 'background' | 'backgroundInverted'

type ButtonSize = 'm' | 'l' | 'xl'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string
    theme?: ButtonTheme
    square?: boolean
    size?: ButtonSize
}

export const Button: FC<ButtonProps> = (props) => {
    const { className, children, theme, square, size = 'm', ...otherProps } = props

    const mods: Record<string, boolean> = {
        [styles.square]: square
    }

    return (
        <button
            className={ classNames(styles.Button, mods,
                [className, styles[theme], styles[size]]) }
            { ...otherProps }
        >
            { children }
        </button>
    )
}
