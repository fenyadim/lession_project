import { type ReactNode } from 'react'
import { classNames, type ModsType } from '@/6_shared/lib/classNames/classNames'
import { useModal } from '@/6_shared/lib/hooks/useModal/useModal'
import { Overlay } from '@/6_shared/ui/Overlay/Overlay'
import { Portal } from '@/6_shared/ui/Portal/Portal'
import styles from './Modal.module.scss'

export interface ModalProps {
    className?: string
    isOpen?: boolean
    onClose: () => void
    lazy?: boolean
    children?: ReactNode
}

export const Modal = (props: ModalProps) => {
    const { className, children, isOpen, onClose, lazy } = props

    const { isClosing, close, isMounted } = useModal({
        animationDelay: 100,
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
            <div className={classNames(styles.Modal, mods,
                [className])}
            >
                <Overlay onClick={close}/>
                <div className={styles.content}>
                    {children}
                </div>
            </div>
        </Portal>
    )
}
