import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { useParams } from 'react-router-dom'
import { Page } from '@/3_widgets/Page/Page'
import { ArticleRating } from '@/4_features/ArticleRating'
import { ArticleRecommendationList } from '@/4_features/ArticleRecommendationList'
import { getFeatureFlags, toggleFeatures } from '@/6_shared/lib/features'
import { ArticleDetails } from '@/5_entities/Article'
import { classNames } from '@/6_shared/lib/classNames/classNames'
import {
    DynamicModuleLoader,
    type ReducersList,
} from '@/6_shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { Card } from '@/6_shared/ui/Card/Card'
import { VStack } from '@/6_shared/ui/Stack'
import { articleDetailsPageReducer } from '../../model/slices'
import { ArticleDetailComments } from '../../ui/ArticleDetailComments/ArticleDetailComments'
import { ArticleDetailPageHeader } from '../ArticleDetailPageHeader/ArticleDetailPageHeader'

interface ArticleDetailPageProps {
    className?: string
}

const reducers: ReducersList = {
    articleDetailsPage: articleDetailsPageReducer,
}

const ArticleDetailPage = memo((props: ArticleDetailPageProps) => {
    const { className } = props

    const isArticleRatingEnabled = getFeatureFlags('isArticleRatingEnabled')

    const { id } = useParams<{ id: string }>()
    const { t } = useTranslation()

    if (!id) return null

    const articleRatingCard = toggleFeatures({
        name: 'isCounterEnabled',
        on: () => <ArticleRating articleId={id} />,
        off: () => <Card>{t('Оценка статей скоро появится')}</Card>,
    })

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <Page className={classNames('', {}, [className])}>
                <VStack gap="16" max>
                    <ArticleDetailPageHeader />
                    <ArticleDetails id={id} />
                    {articleRatingCard}
                    <ArticleRecommendationList />
                    <ArticleDetailComments id={id} />
                </VStack>
            </Page>
        </DynamicModuleLoader>
    )
})

export default ArticleDetailPage

ArticleDetailPage.displayName = 'ArticleDetailPage'
