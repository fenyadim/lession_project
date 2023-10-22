import { useEffect } from 'react'

export const useInitialState = (callback: () => void) => {
    useEffect(() => {
        if (__PROJECT__ !== 'storybook') {
            callback()
        }
        // eslint-disable-next-line
    }, [])
}
