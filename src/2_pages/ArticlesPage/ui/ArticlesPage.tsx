import { memo, useCallback } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Page } from '@/3_widgets/Page/Page'
import { classNames } from '@/6_shared/lib/classNames/classNames'
import { DynamicModuleLoader, type ReducersList } from '@/6_shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { useAppDispatch } from '@/6_shared/lib/hooks/useAppDispatch/useAppDispatch'
import { useInitialEffect } from '@/6_shared/lib/hooks/useInitialEffect/useInitialEffect'
import { fetchNextArticlePage } from '../model/services/fetchNextArticlePage/fetchNextArticlePage'
import { initArticlesPage } from '../model/services/initArticlesPage/initArticlesPage'
import { articlePageReducer } from '../model/slices/articlesPageSlice'
import { ArticleInfiniteList } from '../ui/ArticleInfiniteList/ArticleInfiniteList'
import { ArticlePageFilters } from './ArticlePageFilters/ArticlePageFilters'
import styles from './ArticlesPage.module.scss'

interface ArticlesPageProps {
    className?: string
}

const reducers: ReducersList = {
    articlesPage: articlePageReducer
}

const ArticlesPage = memo((props: ArticlesPageProps) => {
    const { className } = props

    const dispatch = useAppDispatch()
    const [searchParams] = useSearchParams()

    console.log(searchParams.entries())

    const onLoadNextPart = useCallback(() => {
        void dispatch(fetchNextArticlePage())
    }, [dispatch])

    useInitialEffect(() => {
        void dispatch(initArticlesPage(searchParams))
    })

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
            <Page data-testid='ArticlesPage' onScrollEnd={onLoadNextPart}
                className={classNames(styles.ArticlePage, {}, [className])}>
                <ArticlePageFilters/>
                <ArticleInfiniteList className={styles.list}/>
            </Page>
        </DynamicModuleLoader>
    )
})

export default ArticlesPage

ArticlesPage.displayName = 'ArticlesPage'
