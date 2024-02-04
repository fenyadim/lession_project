import type { ComponentPropsWithoutRef, ReactNode } from 'react'
import { forwardRef } from 'react'
import { classNames, type ModsType } from '../../lib/classNames/classNames'
import styles from './Button.module.scss'

type ButtonTheme =
  | 'clear'
  | 'clearInverted'
  | 'outline'
  | 'outline_red'
  | 'background'
  | 'backgroundInverted'

type ButtonSize = 'm' | 'l' | 'xl'

interface ButtonProps extends ComponentPropsWithoutRef<'button'> {
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
            disabled = false,
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
                ref={ref}
                type="button"
                className={classNames(styles.Button, mods, [
                    className,
                    styles[theme],
                    styles[size]
                ])}
                disabled={disabled}
                {...otherProps}
            >
                {children}
            </button>
        )
    }
)

Button.displayName = 'Button'
