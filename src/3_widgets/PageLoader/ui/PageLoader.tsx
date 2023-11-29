import { type FC } from 'react'
import { classNames } from '@/6_shared/lib/classNames/classNames'
import { Loader } from '@/6_shared/ui/Loader/Loader'
import styles from './PageLoader.module.scss'

interface PageLoaderProps {
    className?: string
}

export const PageLoader: FC<PageLoaderProps> = (props) => {
    const { className } = props

    return (
        <div className={classNames(styles.PageLoader, {}, [className])}>
            <Loader/>
        </div>
    )
}
