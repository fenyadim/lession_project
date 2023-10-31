import { memo, useCallback } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { ArticleList, type ArticleView, ArticleViewSelector } from 'entities/Article'
import { DynamicModuleLoader, type ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect'
import { fetchArticleList } from '../model/services/fetchArticleList/fetchArticleList'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { useSelector } from 'react-redux'
import { articlePageAction, articlePageReducer, getArticles } from '../model/slices/articlesPageSlice'
import { getArticlePageIsLoading, getArticlePageView } from '../model/selectors/articlesPageSelectors'

interface ArticlesPageProps {
    className?: string
}

const reducers: ReducersList = {
    articlesPage: articlePageReducer
}

const ArticlesPage = memo((props: ArticlesPageProps) => {
    const { className } = props
    const dispatch = useAppDispatch()
    const articles = useSelector(getArticles.selectAll)
    const isLoading = useSelector(getArticlePageIsLoading)
    const view = useSelector(getArticlePageView)
    // const error = useSelector(getArticlePageError)

    useInitialEffect(() => {
        void dispatch(fetchArticleList())
        void dispatch(articlePageAction.initState())
    })

    const onChangeView = useCallback((view: ArticleView) => {
        dispatch(articlePageAction.setView(view))
    }, [dispatch])

    return (
        <DynamicModuleLoader reducers={ reducers }>
            <div className={ classNames('', {}, [className]) }>
                <ArticleViewSelector
                    view={ view }
                    onViewClick={ onChangeView }
                />
                <ArticleList
                    isLoading={ isLoading }
                    view={ view }
                    articles={ articles }/>
            </div>
        </DynamicModuleLoader>
    )
})

export default ArticlesPage

ArticlesPage.displayName = 'ArticlesPage'
