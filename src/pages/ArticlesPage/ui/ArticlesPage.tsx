import { memo } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import styles from './ArticlesPage.module.scss'

interface ArticlesPageProps {
    className?: string
}

const ArticlesPage = memo((props: ArticlesPageProps) => {
    const { className } = props

    return (
        <div className={ classNames(styles.ArticlesPage, {}, [className]) }>
            ARTICLES PAGE
        </div>
    )
})

export default ArticlesPage

ArticlesPage.displayName = 'ArticlesPage'
