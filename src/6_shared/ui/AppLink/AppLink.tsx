import { forwardRef, type ReactNode } from 'react'
import { Link, type LinkProps } from 'react-router-dom'
import { classNames } from '6_shared/lib/classNames/classNames'
import styles from './AppLink.module.scss'

export enum AppLinkTheme {
    PRIMARY = 'primary',
    INVERTED = 'inverted'
}

interface AppLinkProps extends LinkProps {
    className?: string
    theme?: AppLinkTheme
    children?: ReactNode
}

export const AppLink = forwardRef<typeof Link, AppLinkProps>(
    (props: AppLinkProps, ref) => {
        const {
            className,
            children,
            theme = AppLinkTheme.PRIMARY,
            ...otherProps
        } = props

        return (
            <Link
                className={ classNames(styles.AppLink, {},
                    [className, styles[theme]]) }
                { ...otherProps }
            >
                { children }
            </Link>
        )
    })

AppLink.displayName = 'AppLink'
