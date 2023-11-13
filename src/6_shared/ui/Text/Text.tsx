import { memo } from 'react'
import { classNames } from '6_shared/lib/classNames/classNames'
import styles from './Text.module.scss'

type TextTheme = 'primary' | 'error' | 'inverted'
type TextAlign = 'left' | 'right' | 'center'
type TextSize = 's' | 'm' | 'l'

interface TextProps {
    className?: string
    title?: string
    text?: string
    theme?: TextTheme
    align?: TextAlign
    size?: TextSize
}

type HeaderTagType = 'h1' | 'h2' | 'h3'

const mapSizeToHeaderTag: Record<TextSize, HeaderTagType> = {
    s: 'h3',
    m: 'h2',
    l: 'h1'
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

    const HeaderTag = mapSizeToHeaderTag[size]

    const additional: Array<string | undefined> = [className, styles[theme], styles[align], styles[size]]

    return (
        <div className={ classNames(styles.Text, {}, additional) }>
            { title &&
                <HeaderTag className={ styles.title }>
                    { title }
                </HeaderTag>
            }
            { text && <p className={ styles.text }>{ text }</p> }
        </div>
    )
})

Text.displayName = 'Text'
