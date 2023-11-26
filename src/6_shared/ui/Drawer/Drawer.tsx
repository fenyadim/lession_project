import { memo, type ReactNode } from 'react'
import { useTheme } from '1_app/provides/ThemeProvider'
import { classNames, type ModsType } from '../../lib/classNames/classNames'
import { useModal } from '../../lib/hooks/useModal/useModal'
import { Overlay } from '../Overlay/Overlay'
import { Portal } from '../Portal/Portal'
import styles from './Drawer.module.scss'

interface DrawerProps {
    className?: string
    children: ReactNode
    isOpen?: boolean
    onClose?: () => void
    lazy?: boolean
}

export const Drawer = memo((props: DrawerProps) => {
    const {
        className,
        onClose,
        isOpen,
        children,
        lazy
    } = props

    const { theme } = useTheme()

    const { isClosing, close, isMounted } = useModal({
        animationDelay: 300,
        onClose,
        isOpen
    })

    const mods: ModsType = {
        [styles.opened]: isOpen,
        [styles.isClosing]: isClosing
    }
    if (lazy && !isMounted) {
        return null
    }

    return (
        <Portal>
            <div className={classNames(styles.Drawer, mods, [className, theme, 'app_drawer'])}>
                <Overlay onClick={close}/>
                <div className={styles.content}>
                    {children}
                </div>
            </div>
        </Portal>
    )
})

Drawer.displayName = 'Drawer'
