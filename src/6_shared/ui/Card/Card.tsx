import { type HTMLAttributes, memo, type ReactNode } from 'react'
import { classNames } from '../../lib/classNames/classNames'
import styles from './Card.module.scss'

interface CardProps extends HTMLAttributes<HTMLDivElement> {
    className?: string
    children: ReactNode
    theme?: 'primary' | 'outline' | 'inverted' | 'invertedOutline'
    max?: boolean
}

export const Card = memo((props: CardProps) => {
    const { className, children, theme = 'primary', max, ...otherProps } = props

    return (
        <div
            className={classNames(
                styles.Card,
                { [styles.max]: max },
                [className, styles[theme]])}
            {...otherProps}
        >
            {children}
        </div>
    )
})

Card.displayName = 'Card'
