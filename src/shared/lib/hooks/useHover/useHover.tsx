import { useCallback, useMemo, useState } from 'react'

interface UseHoverBing {
    onMouseEnter: () => void
    onMouseLeave: () => void
}

type UseHoverReturn = [boolean, UseHoverBing]

export const useHover = (): UseHoverReturn => {
    const [isHover, setIsHover] = useState(false)

    const onMouseEnter = useCallback(() => {
        setIsHover(true)
    }, [])

    const onMouseLeave = useCallback(() => {
        setIsHover(false)
    }, [])

    return useMemo(() => [isHover, {
        onMouseEnter, onMouseLeave
    }
    ], [isHover, onMouseEnter, onMouseLeave])
}
