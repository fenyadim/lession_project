import { memo, useCallback } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { ArticleDetails } from 'entities/Article'
import { useNavigate, useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Text } from 'shared/ui/Text/Text'
import { CommentList } from 'entities/Comment'
import styles from './ArticleDetailPage.module.scss'
import { DynamicModuleLoader, type ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { articleDetailsCommentsReducer, getArticleComments } from '../model/slices/articleDetailsCommentsSlice'
import { useSelector } from 'react-redux'
import { getArticleCommentsIsLoading } from '../model/selectors/comments'
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { fetchCommentsByArticleId } from '../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId'
import { AddCommentForm } from 'features/AddCommentForm'
import { addCommentForArticle } from '../model/services/addCommentForArticle/addCommentForArticle'
import { Button } from 'shared/ui/Button/Button'
import { RoutePath } from 'shared/config/routeConfig/routeConfig'

interface ArticleDetailPageProps {
    className?: string
}

const reducers: ReducersList = {
    articleDetailsComments: articleDetailsCommentsReducer
}

const ArticleDetailPage = memo((props: ArticleDetailPageProps) => {
    const { className } = props

    const { t } = useTranslation('article-details')
    const { id } = useParams<{ id: string }>()
    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    const comments = useSelector(getArticleComments.selectAll)
    const isLoading = useSelector(getArticleCommentsIsLoading)
    // const error = useSelector(getArticleCommentsError)

    useInitialEffect(() => {
        void dispatch(fetchCommentsByArticleId(id))
    })

    const onSendComment = useCallback((text: string) => {
        void dispatch(addCommentForArticle(text))
    }, [dispatch])

    const onBackToList = useCallback(() => {
        navigate(RoutePath.articles)
    }, [navigate])

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
        <DynamicModuleLoader reducers={ reducers } removeAfterUnmount>
            <div
                className={ classNames('', {}, [className]) }>
                <Button onClick={ onBackToList }>
                    { t('Назад к списку') }
                </Button>
                <ArticleDetails id={ id }/>
                <Text
                    className={ styles.commentTitle }
                    title={ t('Комментарии') }
                />
                <AddCommentForm onSendComment={ onSendComment }/>
                <CommentList isLoading={ isLoading } comments={ comments }/>
            </div>
        </DynamicModuleLoader>
    )
})

export default ArticleDetailPage

ArticleDetailPage.displayName = 'ArticleDetailPage'
