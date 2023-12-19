import { type CSSProperties, type FC, useMemo } from 'react'
import UserIcon from '../../assets/icons/avatar.svg'
import { classNames } from '../../lib/classNames/classNames'
import { AppImage } from '../AppImage/AppImage'
import { Icon } from '../Icon/Icon'
import { Skeleton } from '../Skeleton/Skeleton'
import styles from './Avatar.module.scss'

interface AvatarProps {
    className?: string
    src: string
    size?: number
    alt?: string
    fallbackInverted?: boolean
}

export const Avatar: FC<AvatarProps> = (props) => {
    const { className, src, size = 100, alt, fallbackInverted } = props

    const style = useMemo<CSSProperties>(() => ({
        width: size,
        height: size
    }), [size])

    return (
        <AppImage
            src={src}
            alt={alt}
            style={style}
            className={classNames(styles.Avatar, {}, [className])}
            fallback={<Skeleton border={'50%'} width={size} height={size}/>}
            errorFallback={<Icon inverted={fallbackInverted} Svg={UserIcon} height={size} width={size}/>}
        />
    )
}
