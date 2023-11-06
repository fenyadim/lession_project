import { memo } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import styles from './Text.module.scss'

interface TextProps {
    className?: string
    title?: string
    text?: string
    theme?: 'primary' | 'error' | 'inverted'
    align?: 'left' | 'right' | 'center'
    size?: 'm' | 'l'
}

export const Text = memo((props: TextProps) => {
    const {
        className,
        text,
        title,
        theme = 'primary',
        align = 'left',
        size = 'm'
    } = props

    const additional: Array<string | undefined> = [className, styles[theme], styles[align], styles[size]]

    return (
        <div className={ classNames(styles.Text, {}, additional) }>
            { title && <p className={ styles.title }>{ title }</p> }
            { text && <p className={ styles.text }>{ text }</p> }
        </div>
    )
})

Text.displayName = 'Text'
