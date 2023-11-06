import { type MutableRefObject, type ReactNode, type UIEvent, useRef } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import styles from './Page.module.scss'
import { useInfiniteScroll } from 'shared/lib/hooks/useInfiniteScroll/useInfiniteScroll'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { getScrollSaveByPath, scrollSaveActions } from 'features/ScrollSave'
import { useLocation } from 'react-router-dom'
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect'
import { useSelector } from 'react-redux'
import { type StateSchema } from 'app/provides/StoreProvider'
import { useThrottle } from 'shared/lib/hooks/useThrottle/useThrottle'

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

    console.log(pathname)
    console.log(onScrollEnd)

    useInfiniteScroll({
        triggerRef,
        wrapperRef,
        callback: onScrollEnd
    })

    useInitialEffect(() => {
        wrapperRef.current.scrollTop = scrollPosition
    })

    const onScroll = useThrottle((e: UIEvent<HTMLDivElement>) => {
        console.log(e)
        dispatch(scrollSaveActions.setScrollPosition({
            path: pathname,
            position: e.currentTarget.scrollTop
        }))
    }, 700)

    return (
        <section ref={ wrapperRef }
            className={ classNames(styles.Page, {}, [className]) }
            onScroll={ onScroll }
        >
            { children }
            { onScrollEnd
                ? <div className={ styles.trigger } ref={ triggerRef }/>
                : null }
        </section>
    )
}
