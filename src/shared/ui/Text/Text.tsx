import { type FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import styles from './Text.module.scss'

interface TextProps {
    className?: string
    title?: string
    text?: string
    theme?: 'primary' | 'error'
}

export const Text: FC<TextProps> = (props) => {
    const { className, text, title, theme } = props

    return (
        <div className={ classNames(styles.Text, {},
            [className, styles[theme]]) }>
            { title && <p className={ styles.title }>{ title }</p> }
            { text && <p className={ styles.text }>{ text }</p> }
        </div>
    )
}
