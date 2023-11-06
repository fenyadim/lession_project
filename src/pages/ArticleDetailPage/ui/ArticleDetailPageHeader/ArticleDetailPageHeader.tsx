import { memo, useCallback } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import styles from './ArticleDetailPageHeader.module.scss'
import { useNavigate } from 'react-router-dom'
import { RoutePath } from 'shared/config/routeConfig/routeConfig'
import { Button } from 'shared/ui/Button/Button'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { getCanEditArticle } from '../../model/selectors/article'
import { getArticleDetailsData } from 'entities/Article'

interface ArticleDetailPageHeaderProps {
    className?: string
}

export const ArticleDetailPageHeader = memo(
    (props: ArticleDetailPageHeaderProps) => {
        const { className } = props

        const { t } = useTranslation('article-details')
        const navigate = useNavigate()
        const article = useSelector(getArticleDetailsData)
        const canEdit = useSelector(getCanEditArticle)

        const onBackToList = useCallback(() => {
            navigate(RoutePath.articles)
        }, [navigate])

        const onEdit = useCallback(() => {
            navigate(`${RoutePath.article_detail}${article?.id}/edit`)
        }, [article?.id, navigate])

        return (
            <div className={ classNames(styles.ArticleDetailPageHeader, {},
                [className]) }>
                <Button onClick={ onBackToList }>
                    { t('Назад к списку') }
                </Button>
                { canEdit && (
                    <Button
                        className={ styles.editBtn }
                        onClick={ onEdit }
                    >
                        { t('Редактировать') }
                    </Button>
                ) }
            </div>
        )
    })

ArticleDetailPageHeader.displayName = 'ArticleDetailPageHeader'
