import { memo } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import styles from './ArticleDetailPage.module.scss'

interface ArticleDetailPageProps {
    className?: string
}

const ArticleDetailPage = memo((props: ArticleDetailPageProps) => {
    const { className } = props

    return (
        <div
            className={ classNames(styles.ArticleDetailPage, {}, [className]) }>
            ARTICLES DETAIL
        </div>
    )
})

export default ArticleDetailPage

ArticleDetailPage.displayName = 'ArticleDetailPage'
