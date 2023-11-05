import { memo, useCallback } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { ArticleList } from 'entities/Article'
import { DynamicModuleLoader, type ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { useSelector } from 'react-redux'
import { articlePageReducer, getArticles } from '../model/slices/articlesPageSlice'
import { getArticlePageError, getArticlePageIsLoading, getArticlePageView } from '../model/selectors/articlesPageSelectors'
import { Page } from 'widgets/Page/Page'
import { fetchNextArticlePage } from '../model/services/fetchNextArticlePage/fetchNextArticlePage'
import { Text } from 'shared/ui/Text/Text'
import { useTranslation } from 'react-i18next'
import { initArticlesPage } from '../model/services/initArticlesPage/initArticlesPage'
import { ArticlePageFilters } from './ArticlePageFilters/ArticlePageFilters'
import { useSearchParams } from 'react-router-dom'
import styles from './ArticlesPage.module.scss'

interface ArticlesPageProps {
    className?: string
}

const reducers: ReducersList = {
    articlesPage: articlePageReducer
}

const ArticlesPage = memo((props: ArticlesPageProps) => {
    const { className } = props
    const { t } = useTranslation()
    const dispatch = useAppDispatch()
    const articles = useSelector(getArticles.selectAll)
    const isLoading = useSelector(getArticlePageIsLoading)
    const view = useSelector(getArticlePageView)
    const error = useSelector(getArticlePageError)
    const [searchParams] = useSearchParams()

    const onLoadNextPart = useCallback(() => {
        void dispatch(fetchNextArticlePage())
    }, [dispatch])

    useInitialEffect(() => {
        void dispatch(initArticlesPage(searchParams))
    })

    if (error) {
        return (
            <Page>
                <Text title={ t('Что-то пошло не так') } theme="error"/>
            </Page>
        )
    }

    return (
        <DynamicModuleLoader reducers={ reducers } removeAfterUnmount={ false }>
            <Page onScrollEnd={ onLoadNextPart }
                className={ classNames(styles.ArticlePage, {}, [className]) }>
                <ArticlePageFilters/>
                <ArticleList
                    isLoading={ isLoading }
                    view={ view }
                    articles={ articles }
                    className={ styles.list }
                />
            </Page>
        </DynamicModuleLoader>
    )
})

export default ArticlesPage

ArticlesPage.displayName = 'ArticlesPage'
