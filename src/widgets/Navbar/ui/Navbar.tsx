import { type FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import styles from './Navbar.module.scss'

interface NavbarProps {
    className?: string
}

export const Navbar: FC<NavbarProps> = (props) => {
    const { className } = props

    return (
        <div className={ classNames(styles.Navbar, {}, [className]) }>
            <div className={ styles.links }>

            </div>
        </div>
    )
}
