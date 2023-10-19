import { memo } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'

interface ArticlesPageProps {
    className?: string
}

const ArticlesPage = memo((props: ArticlesPageProps) => {
    const { className } = props

    return (
        <div className={ classNames('', {}, [className]) }>
            ARTICLES PAGE
        </div>
    )
})

export default ArticlesPage

ArticlesPage.displayName = 'ArticlesPage'
