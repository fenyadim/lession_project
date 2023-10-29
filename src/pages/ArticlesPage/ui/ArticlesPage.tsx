import { memo } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { ArticleList, ArticleView } from 'entities/Article'

interface ArticlesPageProps {
    className?: string
}

const ArticlesPage = memo((props: ArticlesPageProps) => {
    const { className } = props

    return (
        <div className={ classNames('', {}, [className]) }>
            <ArticleList
                view={ ArticleView.BIG }
                articles={ [] }/>
        </div>
    )
})

export default ArticlesPage

ArticlesPage.displayName = 'ArticlesPage'
