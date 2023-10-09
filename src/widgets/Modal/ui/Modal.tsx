import { type FC, type MouseEvent, type MutableRefObject, useCallback, useEffect, useRef, useState } from 'react'
import { classNames, type ModsType } from 'shared/lib/classNames/classNames'
import { Portal } from 'shared/ui/Portal/Portal'
import styles from './Modal.module.scss'

export interface ModalProps {
    className?: string
    isOpen?: boolean
    onClose: () => void
    lazy?: boolean
}

const ANIMATION_DELAY = 100

export const Modal: FC<ModalProps> = (props) => {
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

    const onContentClick = (e: MouseEvent): void => {
        e.stopPropagation()
    }

    if (lazy && !isMounted) {
        return null
    }

    return (
        <Portal>
            <div className={ classNames(styles.Modal, mods,
                [className]) }>
                <div className={ styles.overlay } onClick={ closeHandler }>
                    <div className={ styles.content }
                        onClick={ onContentClick }>
                        { children }
                    </div>
                </div>
            </div>
        </Portal>
    )
}
