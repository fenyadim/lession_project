import { memo, useCallback } from 'react'
import { classNames } from '6_shared/lib/classNames/classNames'
import { ArticleDetails, ArticleList } from '5_entities/Article'
import { useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Text } from '6_shared/ui/Text/Text'
import { CommentList } from '5_entities/Comment'
import styles from './ArticleDetailPage.module.scss'
import { DynamicModuleLoader, type ReducersList } from '6_shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { getArticleComments } from '../../model/slices/articleDetailsCommentsSlice'
import { useSelector } from 'react-redux'
import { getArticleCommentsIsLoading } from '../../model/selectors/comments'
import { useInitialEffect } from '6_shared/lib/hooks/useInitialEffect/useInitialEffect'
import { useAppDispatch } from '6_shared/lib/hooks/useAppDispatch/useAppDispatch'
import { fetchCommentsByArticleId } from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId'
import { AddCommentForm } from '4_features/AddCommentForm'
import { addCommentForArticle } from '../../model/services/addCommentForArticle/addCommentForArticle'
import { Page } from '3_widgets/Page/Page'
import { getArticleRecommendations } from '../../model/slices/articleDetailsRecommendationSlice'
import { getArticleRecommendationsIsLoading } from '../../model/selectors/recommendations'
import { fetchArticleRecommendations } from '../../model/services/fetchArticleRecommendations/fetchArticleRecommendations'
import { articleDetailsPageReducer } from '../../model/slices'
import { ArticleDetailPageHeader } from '../ArticleDetailPageHeader/ArticleDetailPageHeader'
import { VStack } from '6_shared/ui/Stack'

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
    const dispatch = useAppDispatch()
    const comments = useSelector(getArticleComments.selectAll)
    const recommendations = useSelector(getArticleRecommendations.selectAll)
    const isLoading = useSelector(getArticleCommentsIsLoading)
    const recommendationsIsLoading = useSelector(
        getArticleRecommendationsIsLoading
    )
    // const error = useSelector(getArticleCommentsError)

    useInitialEffect(() => {
        void dispatch(fetchCommentsByArticleId(id))
        void dispatch(fetchArticleRecommendations())
    })

    const onSendComment = useCallback((text: string) => {
        void dispatch(addCommentForArticle(text))
    }, [dispatch])

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
                    <Text
                        size="l"
                        className={ styles.commentTitle }
                        title={ t('Рекомендуем') }
                    />
                    <ArticleList
                        articles={ recommendations }
                        isLoading={ recommendationsIsLoading }
                        className={ styles.recommendations }
                        target="_blank"
                    />
                    <Text
                        size="l"
                        className={ styles.commentTitle }
                        title={ t('Комментарии') }
                    />
                    <AddCommentForm onSendComment={ onSendComment }/>
                    <CommentList isLoading={ isLoading } comments={ comments }/>
                </VStack>
            </Page>
        </DynamicModuleLoader>
    )
})

export default ArticleDetailPage

ArticleDetailPage.displayName = 'ArticleDetailPage'
