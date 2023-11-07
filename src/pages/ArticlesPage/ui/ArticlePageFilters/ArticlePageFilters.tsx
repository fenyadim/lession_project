import { memo, useCallback } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import styles from './ArticlePageFilters.module.scss'
import { type ArticleSortField, ArticleSortSelector, type ArticleType, ArticleTypeTabs, type ArticleView, ArticleViewSelector } from 'entities/Article'
import { articlePageAction } from '../../model/slices/articlesPageSlice'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { useSelector } from 'react-redux'
import { getArticlePageOrder, getArticlePageSearch, getArticlePageSort, getArticlePageType, getArticlePageView } from '../../model/selectors/articlesPageSelectors'
import { useTranslation } from 'react-i18next'
import { Card } from 'shared/ui/Card/Card'
import { Input } from 'shared/ui/Input/Input'
import { type SortOrder } from 'shared/types'
import { fetchArticleList } from '../../model/services/fetchArticleList/fetchArticleList'
import { useDebounce } from 'shared/lib/hooks/useDebounce/useDebounce'

interface ArticlePageFiltersProps {
    className?: string
}

export const ArticlePageFilters = memo((props: ArticlePageFiltersProps) => {
    const { className } = props

    const { t } = useTranslation()
    const view = useSelector(getArticlePageView)
    const sort = useSelector(getArticlePageSort)
    const order = useSelector(getArticlePageOrder)
    const search = useSelector(getArticlePageSearch)
    const type = useSelector(getArticlePageType)
    const dispatch = useAppDispatch()

    const fetchData = useCallback(() => {
        void dispatch(fetchArticleList({ replace: true }))
    }, [dispatch])

    const debounceFetchData = useDebounce(fetchData, 500)

    const onChangeView = useCallback((view: ArticleView) => {
        dispatch(articlePageAction.setView(view))
    }, [dispatch])

    const onChangeSort = useCallback((newSort: ArticleSortField) => {
        dispatch(articlePageAction.setSort(newSort))
        dispatch(articlePageAction.setPage(1))
        fetchData()
    }, [fetchData, dispatch])

    const onChangeOrder = useCallback((newOrder: SortOrder) => {
        dispatch(articlePageAction.setOrder(newOrder))
        dispatch(articlePageAction.setPage(1))
        fetchData()
    }, [fetchData, dispatch])

    const onChangeType = useCallback((value: ArticleType) => {
        dispatch(articlePageAction.setType(value))
        dispatch(articlePageAction.setPage(1))
        fetchData()
    }, [fetchData, dispatch])

    const onChangeSearch = useCallback((search: string) => {
        dispatch(articlePageAction.setSearch(search))
        dispatch(articlePageAction.setPage(1))
        debounceFetchData()
    }, [debounceFetchData, dispatch])

    return (
        <div className={ classNames(styles.ArticlePageFilters, {},
            [className]) }>
            <div className={ styles.sortWrapper }>
                <ArticleSortSelector
                    sort={ sort }
                    order={ order }
                    onChangeSort={ onChangeSort }
                    onChangeOrder={ onChangeOrder }
                />
                <ArticleViewSelector
                    view={ view }
                    onViewClick={ onChangeView }
                />
            </div>
            <Card className={ styles.search }>
                <Input
                    value={ search }
                    onChange={ onChangeSearch }
                    placeholder={ t('Поиск') }
                />
            </Card>
            <ArticleTypeTabs
                className={ styles.tabs }
                value={ type }
                onChangeType={ onChangeType }
            />
        </div>
    )
})

ArticlePageFilters.displayName = 'ArticlePageFilters'