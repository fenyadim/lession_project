import { type CSSProperties, type FC, useMemo } from 'react'
import { classNames } from '../../lib/classNames/classNames'
import styles from './Avatar.module.scss'

interface AvatarProps {
    className?: string
    src: string
    size?: number
    alt?: string
}

export const Avatar: FC<AvatarProps> = (props) => {
    const { className, src, size, alt } = props

    const style = useMemo<CSSProperties>(() => ({
        width: size || 100,
        height: size || 100
    }), [size])

    return (
        <img
            src={ src }
            alt={ alt }
            style={ style }
            className={ classNames(styles.Avatar, {}, [className]) }
        />
    )
}
