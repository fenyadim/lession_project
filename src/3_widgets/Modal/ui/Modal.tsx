import { type MutableRefObject, type ReactNode, useCallback, useEffect, useRef, useState } from 'react'
import { classNames, type ModsType } from '6_shared/lib/classNames/classNames'
import { Overlay } from '6_shared/ui/Overlay/Overlay'
import { Portal } from '6_shared/ui/Portal/Portal'
import styles from './Modal.module.scss'

export interface ModalProps {
    className?: string
    isOpen?: boolean
    onClose: () => void
    lazy?: boolean
    children?: ReactNode
}

const ANIMATION_DELAY = 100

export const Modal = (props: ModalProps) => {
    const { className, children, isOpen, onClose, lazy } = props

    const [isClosing, setIsClosing] = useState(false)
    const [isMounted, setIsMounted] = useState(false)
    const timerRef = useRef() as MutableRefObject<ReturnType<typeof setTimeout>>

    const mods: ModsType = {
        [styles.opened]: isOpen,
        [styles.isClosing]: isClosing
    }

    useEffect(() => {
        if (isOpen) {
            setIsMounted(true)
        }
    }, [isOpen])

    const closeHandler = useCallback((): void => {
        if (onClose) {
            setIsClosing(true)
            timerRef.current = setTimeout(() => {
                onClose()
                setIsClosing(false)
            }, ANIMATION_DELAY)
        }
    }, [onClose])

    const onKeyDown = useCallback((e: KeyboardEvent): void => {
        if (e.key === 'Escape') {
            closeHandler()
        }
    }, [closeHandler])

    useEffect(() => {
        if (isOpen) {
            window.addEventListener('keydown', onKeyDown)
        }

        return () => {
            clearTimeout(timerRef.current)
            window.removeEventListener('keydown', onKeyDown)
        }
    }, [isOpen, onKeyDown])

    if (lazy && !isMounted) {
        return null
    }

    return (
        <Portal>
            <div className={classNames(styles.Modal, mods,
                [className])}
            >
                <Overlay onClick={closeHandler}/>
                <div className={styles.content}>
                    {children}
                </div>
            </div>
        </Portal>
    )
}
