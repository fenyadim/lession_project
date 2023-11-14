import type React from 'react'
import { memo } from 'react'
import { classNames } from '../../lib/classNames/classNames'
import styles from './Icon.module.scss'

interface IconProps {
    className?: string
    Svg: React.FC<React.SVGProps<SVGSVGElement>>
}

export const Icon = memo((props: IconProps) => {
    const { className, Svg } = props

    return (
        <Svg className={ classNames(styles.Icon, {}, [className]) }/>
    )
})

Icon.displayName = 'Icon'
