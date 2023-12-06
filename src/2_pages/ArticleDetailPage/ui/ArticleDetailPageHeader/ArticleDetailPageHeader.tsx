import { memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getArticleDetailsData } from '@/5_entities/Article'
import { RoutePath } from '@/6_shared/const/router'
import { classNames } from '@/6_shared/lib/classNames/classNames'
import { Button } from '@/6_shared/ui/Button/Button'
import { HStack } from '@/6_shared/ui/Stack'
import { getCanEditArticle } from '../../model/selectors/article'

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
            <HStack
                max
                justify="between"
                className={classNames('', {},
                    [className])}
            >
                <Button onClick={onBackToList}>
                    {t('Назад к списку')}
                </Button>
                {canEdit && (
                    <Button
                        onClick={onEdit}
                    >
                        {t('Редактировать')}
                    </Button>
                )}
            </HStack>
        )
    })

ArticleDetailPageHeader.displayName = 'ArticleDetailPageHeader'
