import { memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { AddCommentForm } from '4_features/AddCommentForm'
import { CommentList } from '5_entities/Comment'
import { classNames } from '6_shared/lib/classNames/classNames'
import { useAppDispatch } from '6_shared/lib/hooks/useAppDispatch/useAppDispatch'
import { useInitialEffect } from '6_shared/lib/hooks/useInitialEffect/useInitialEffect'
import { VStack } from '6_shared/ui/Stack'
import { Text } from '6_shared/ui/Text/Text'
import { getArticleCommentsIsLoading } from '../../model/selectors/comments'
import { addCommentForArticle } from '../../model/services/addCommentForArticle/addCommentForArticle'
import { fetchArticleRecommendations } from '../../model/services/fetchArticleRecommendations/fetchArticleRecommendations'
import { fetchCommentsByArticleId } from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId'
import { getArticleComments } from '../../model/slices/articleDetailsCommentsSlice'
import styles from './ArticleDetailComments.module.scss'

interface ArticleDetailCommentsProps {
    className?: string
    id: string
}

export const ArticleDetailComments = memo(
    (props: ArticleDetailCommentsProps) => {
        const { className, id } = props

        const { t } = useTranslation('article-details')
        const dispatch = useAppDispatch()
        const comments = useSelector(getArticleComments.selectAll)
        const isLoading = useSelector(getArticleCommentsIsLoading)

        useInitialEffect(() => {
            void dispatch(fetchCommentsByArticleId(id))
            void dispatch(fetchArticleRecommendations())
        })

        const onSendComment = useCallback((text: string) => {
            void dispatch(addCommentForArticle(text))
        }, [dispatch])

        return (
            <VStack
                gap="8"
                max
                className={ classNames(styles.ArticleDetailComments, {},
                    [className]) }
            >
                <Text
                    size="l"
                    className={ styles.commentTitle }
                    title={ t('Комментарии') }
                />
                <AddCommentForm onSendComment={ onSendComment }/>
                <CommentList isLoading={ isLoading } comments={ comments }/>
            </VStack>
        )
    })

ArticleDetailComments.displayName = 'ArticleDetailComments'
