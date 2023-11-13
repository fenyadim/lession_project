import { type MutableRefObject, type ReactNode, type UIEvent, useRef } from 'react'
import { useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { type StateSchema } from '1_app/provides/StoreProvider'
import { getScrollSaveByPath, scrollSaveActions } from '4_features/ScrollSave'
import { classNames } from '6_shared/lib/classNames/classNames'
import { useAppDispatch } from '6_shared/lib/hooks/useAppDispatch/useAppDispatch'
import { useInfiniteScroll } from '6_shared/lib/hooks/useInfiniteScroll/useInfiniteScroll'
import { useInitialEffect } from '6_shared/lib/hooks/useInitialEffect/useInitialEffect'
import { useThrottle } from '6_shared/lib/hooks/useThrottle/useThrottle'
import styles from './Page.module.scss'

interface PageProps {
    className?: string
    children: ReactNode
    onScrollEnd?: () => void
}

export const Page = (props: PageProps) => {
    const { className, children, onScrollEnd } = props

    const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>
    const triggerRef = useRef() as MutableRefObject<HTMLDivElement>
    const dispatch = useAppDispatch()
    const { pathname } = useLocation()
    const scrollPosition = useSelector(
        (state: StateSchema) => getScrollSaveByPath(state, pathname))

    useInfiniteScroll({
        triggerRef,
        wrapperRef,
        callback: onScrollEnd
    })

    useInitialEffect(() => {
        wrapperRef.current.scrollTop = scrollPosition
    })

    const onScroll = useThrottle((e: UIEvent<HTMLDivElement>) => {
        dispatch(scrollSaveActions.setScrollPosition({
            path: pathname,
            position: e.currentTarget.scrollTop
        }))
    }, 700)

    return (
        <main ref={ wrapperRef }
            className={ classNames(styles.Page, {}, [className]) }
            onScroll={ onScroll }
        >
            { children }
            { onScrollEnd
                ? <div className={ styles.trigger } ref={ triggerRef }/>
                : null }
        </main>
    )
}
