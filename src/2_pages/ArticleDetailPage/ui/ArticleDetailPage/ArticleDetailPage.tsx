import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { useParams } from 'react-router-dom'
import { Page } from '3_widgets/Page/Page'
import { ArticleRecommendationList } from '4_features/ArticleRecommendationList'
import { ArticleDetails } from '5_entities/Article'
import { classNames } from '6_shared/lib/classNames/classNames'
import { DynamicModuleLoader, type ReducersList } from '6_shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { VStack } from '6_shared/ui/Stack'
import { articleDetailsPageReducer } from '../../model/slices'
import { ArticleDetailComments } from '../../ui/ArticleDetailComments/ArticleDetailComments'
import { ArticleDetailPageHeader } from '../ArticleDetailPageHeader/ArticleDetailPageHeader'

interface ArticleDetailPageProps {
    className?: string
}

const reducers: ReducersList = {
    articleDetailsPage: articleDetailsPageReducer
}

const ArticleDetailPage = memo((props: ArticleDetailPageProps) => {
    const { className } = props

    const { t } = useTranslation('article-details')
    const { id } = useParams<{ id: string }>()

    if (!id) {
        return (
            <Page
                className={ classNames('', {},
                    [className]) }>
                { t('Статья не найдена') }
            </Page>
        )
    }

    return (
        <DynamicModuleLoader reducers={ reducers } removeAfterUnmount>
            <Page
                className={ classNames('', {}, [className]) }
            >
                <VStack gap="16" max>
                    <ArticleDetailPageHeader/>
                    <ArticleDetails id={ id }/>
                    <ArticleRecommendationList/>
                    <ArticleDetailComments id={ id }/>
                </VStack>
            </Page>
        </DynamicModuleLoader>
    )
})

export default ArticleDetailPage

ArticleDetailPage.displayName = 'ArticleDetailPage'
