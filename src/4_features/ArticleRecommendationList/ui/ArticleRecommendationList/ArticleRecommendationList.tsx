import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { ArticleList } from '@/5_entities/Article'
import { classNames } from '@/6_shared/lib/classNames/classNames'
import { VStack } from '@/6_shared/ui/Stack'
import { Text } from '@/6_shared/ui/Text/Text'
import { useArticleRecommendationsList } from '../../api/articleRecommendationsApi'

interface ArticleRecommendationListProps {
    className?: string
}

export const ArticleRecommendationList = memo(
    (props: ArticleRecommendationListProps) => {
        const { className } = props
        const { t } = useTranslation('article-details')
        const { data: articles, isLoading } = useArticleRecommendationsList(3)

        if (isLoading) return null

        return (
            <VStack
                gap="8"
                className={ classNames(
                    '',
                    {},
                    [className]
                )
                }>
                <Text
                    size="l"
                    title={ t('Рекомендуем') }
                />
                <ArticleList
                    articles={ articles }
                    target="_blank"
                />
            </VStack>
        )
    })

ArticleRecommendationList.displayName = 'ArticleRecommendationList'
