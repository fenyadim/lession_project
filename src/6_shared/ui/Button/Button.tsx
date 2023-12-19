import { type ButtonHTMLAttributes, forwardRef, type ReactNode } from 'react'
import { classNames, type ModsType } from '../../lib/classNames/classNames'
import styles from './Button.module.scss'

type ButtonTheme = 'clear' | 'clearInverted' | 'outline' | 'outline_red' | 'background' | 'backgroundInverted'

type ButtonSize = 'm' | 'l' | 'xl'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string
    theme?: ButtonTheme
    square?: boolean
    size?: ButtonSize
    children?: ReactNode
    fullWidth?: boolean
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    (props, ref) => {
        const {
            className,
            children,
            theme = 'outline',
            square,
            size = 'm',
            disabled,
            fullWidth,
            ...otherProps
        } = props

        const mods: ModsType = {
            [styles.square]: square,
            [styles.disabled]: disabled,
            [styles.fullWidth]: fullWidth
        }

        return (
            <button
                className={classNames(styles.Button, mods,
                    [className, styles[theme], styles[size]])}
                disabled={disabled}
                {...otherProps}
            >
                {children}
            </button>
        )
    })

Button.displayName = 'Button'
