import { memo } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { ArticleDetails } from 'entities/Article'
import { useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

interface ArticleDetailPageProps {
    className?: string
}

const ArticleDetailPage = memo((props: ArticleDetailPageProps) => {
    const { className } = props

    const { t } = useTranslation('article-details')
    const { id } = useParams<{ id: string }>()

    if (!id) {
        return (
            <div
                className={ classNames('', {},
                    [className]) }>
                { t('Статья не найдена') }
            </div>
        )
    }

    return (
        <div
            className={ classNames('', {}, [className]) }>
            <ArticleDetails id={ id }/>
        </div>
    )
})

export default ArticleDetailPage

ArticleDetailPage.displayName = 'ArticleDetailPage'
