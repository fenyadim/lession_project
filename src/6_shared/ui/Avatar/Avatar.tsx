import { useMemo, type FC, type CSSProperties } from 'react'
import { classNames } from '6_shared/lib/classNames/classNames'
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
