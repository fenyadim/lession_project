import { classNames, type ModsType } from 'shared/lib/classNames/classNames'
import styles from './Flex.module.scss'
import { type ReactNode } from 'react'

type FlexJustify = 'start' | 'center' | 'end' | 'between'
type FlexAlign = 'start' | 'center' | 'end'
type FlexDirection = 'row' | 'column'
type FlexGap = '4' | '8' | '16' | '32'

export interface FlexProps {
    className?: string
    children: ReactNode
    justify?: FlexJustify
    align?: FlexAlign
    direction?: FlexDirection
    gap?: FlexGap
    max?: boolean
}

const justifyClasses: Record<FlexJustify, string> = {
    center: styles.justifyCenter,
    end: styles.justifyEnd,
    between: styles.justifyBetween,
    start: styles.justifyStart
}

const alignClasses: Record<FlexAlign, string> = {
    center: styles.alignCenter,
    end: styles.alignEnd,
    start: styles.alignStart
}

const directionClasses: Record<FlexDirection, string> = {
    row: styles.directionRow,
    column: styles.directionColumn
}

const gapClasses: Record<FlexGap, string> = {
    4: styles.gap4,
    8: styles.gap8,
    16: styles.gap16,
    32: styles.gap32
}

export const Flex = (props: FlexProps) => {
    const {
        className,
        children,
        justify = 'start',
        align = 'center',
        direction = 'row',
        gap,
        max
    } = props

    const additional = [
        className,
        justifyClasses[justify],
        alignClasses[align],
        directionClasses[direction],
        gap && gapClasses[gap]
    ]

    const mods: ModsType = {
        [styles.max]: max
    }

    return (
        <div className={ classNames(styles.Flex, mods, additional) }>
            { children }
        </div>
    )
}
