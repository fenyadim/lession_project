import { memo, type ReactNode } from 'react'
import { useTheme } from '1_app/provides/ThemeProvider'
import { classNames, type ModsType } from '../../lib/classNames/classNames'
import { Overlay } from '../Overlay/Overlay'
import { Portal } from '../Portal/Portal'
import styles from './Drawer.module.scss'

interface DrawerProps {
    className?: string
    children: ReactNode
    isOpen?: boolean
    onClose?: () => void
}

export const Drawer = memo((props: DrawerProps) => {
    const {
        className,
        onClose,
        isOpen,
        children
    } = props

    const { theme } = useTheme()

    const mods: ModsType = {
        [styles.opened]: isOpen
    }

    return (
        <Portal>
            <div className={classNames(styles.Drawer, mods, [className, theme, 'app_drawer'])}>
                <Overlay onClick={onClose}/>
                <div className={styles.content}>
                    {children}
                </div>
            </div>
        </Portal>
    )
})

Drawer.displayName = 'Drawer'
