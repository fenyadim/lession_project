import { type CSSProperties, memo } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import styles from './Skeleton.module.scss'

interface SkeletonProps {
    className?: string
    height?: string | number
    width?: string | number
    border?: string
}

export const Skeleton = memo((props: SkeletonProps) => {
    const {
        className,
        border,
        height,
        width
    } = props

    const style: CSSProperties = {
        width,
        borderRadius: border,
        height
    }

    return (
        <div
            className={ classNames(styles.Skeleton, {}, [className]) }
            style={ style }
        />
    )
})

Skeleton.displayName = 'Skeleton'
