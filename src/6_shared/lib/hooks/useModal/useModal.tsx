import { type MutableRefObject, useCallback, useEffect, useRef, useState } from 'react'

interface UseModalProps {
    onClose?: () => void
    isOpen?: boolean
    animationDelay: number
}

interface ReturnProps {
    isClosing: boolean
    isMounted: boolean
    close: () => void
}

export function useModal (props: UseModalProps): ReturnProps {
    const {
        isOpen,
        onClose,
        animationDelay
    } = props

    const [isClosing, setIsClosing] = useState(false)
    const [isMounted, setIsMounted] = useState(false)
    const timerRef = useRef() as MutableRefObject<ReturnType<typeof setTimeout>>

    useEffect(() => {
        if (isOpen) {
            setIsMounted(true)
        }
    }, [isOpen])

    const close = useCallback((): void => {
        if (onClose) {
            setIsClosing(true)
            timerRef.current = setTimeout(() => {
                onClose()
                setIsClosing(false)
            }, animationDelay)
        }
    }, [animationDelay, onClose])

    const onKeyDown = useCallback((e: KeyboardEvent): void => {
        if (e.key === 'Escape') {
            close()
        }
    }, [close])

    useEffect(() => {
        if (isOpen) {
            window.addEventListener('keydown', onKeyDown)
        }

        return () => {
            clearTimeout(timerRef.current)
            window.removeEventListener('keydown', onKeyDown)
        }
    }, [isOpen, onKeyDown])

    return {
        isClosing,
        isMounted,
        close
    }
}
