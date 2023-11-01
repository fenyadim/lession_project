import { memo, useCallback } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { ArticleList, type ArticleView, ArticleViewSelector } from 'entities/Article'
import { DynamicModuleLoader, type ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect'
import { fetchArticleList } from '../model/services/fetchArticleList/fetchArticleList'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { useSelector } from 'react-redux'
import { articlePageAction, articlePageReducer, getArticles } from '../model/slices/articlesPageSlice'
import { getArticlePageError, getArticlePageIsLoading, getArticlePageNum, getArticlePageView } from '../model/selectors/articlesPageSelectors'
import { Page } from 'shared/ui/Page/Page'
import { fetchNextArticlePage } from 'pages/ArticlesPage/model/services/fetchNextArticlePage/fetchNextArticlePage'
import { Text } from 'shared/ui/Text/Text'
import { useTranslation } from 'react-i18next'

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
    const page = useSelector(getArticlePageNum)
    const error = useSelector(getArticlePageError)

    const onLoadNextPart = useCallback(() => {
        void dispatch(fetchNextArticlePage())
    }, [dispatch])

    useInitialEffect(() => {
        void dispatch(articlePageAction.initState())
        void dispatch(fetchArticleList({
            page
        }))
    })

    const onChangeView = useCallback((view: ArticleView) => {
        dispatch(articlePageAction.setView(view))
    }, [dispatch])

    if (error) {
        return (
            <Page>
                <Text title={ t('Что-то пошло не так') } theme="error"/>
            </Page>
        )
    }

    return (
        <DynamicModuleLoader reducers={ reducers }>
            <Page onScrollEnd={ onLoadNextPart }
                className={ classNames('', {}, [className]) }>
                <ArticleViewSelector
                    view={ view }
                    onViewClick={ onChangeView }
                />
                <ArticleList
                    isLoading={ isLoading }
                    view={ view }
                    articles={ articles }/>
            </Page>
        </DynamicModuleLoader>
    )
})

export default ArticlesPage

ArticlesPage.displayName = 'ArticlesPage'
