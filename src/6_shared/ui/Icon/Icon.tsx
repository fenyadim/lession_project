import type React from 'react'
import { memo } from 'react'
import { classNames } from '../../lib/classNames/classNames'
import styles from './Icon.module.scss'

interface IconProps {
    className?: string
    Svg: React.FC<React.SVGProps<SVGSVGElement>>
    inverted?: boolean
}

export const Icon = memo((props: IconProps) => {
    const { className, Svg, inverted } = props

    return (
        <Svg className={classNames(inverted ? styles.inverted : styles.Icon, {}, [className])}/>
    )
})

Icon.displayName = 'Icon'
