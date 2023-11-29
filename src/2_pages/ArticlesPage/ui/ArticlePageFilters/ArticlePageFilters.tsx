import { memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { type ArticleSortField, ArticleSortSelector, type ArticleType, ArticleTypeTabs, type ArticleView, ArticleViewSelector } from '@/5_entities/Article'
import { classNames } from '@/6_shared/lib/classNames/classNames'
import { useAppDispatch } from '@/6_shared/lib/hooks/useAppDispatch/useAppDispatch'
import { useDebounce } from '@/6_shared/lib/hooks/useDebounce/useDebounce'
import { type SortOrder } from '@/6_shared/types'
import { Card } from '@/6_shared/ui/Card/Card'
import { Input } from '@/6_shared/ui/Input/Input'
import { getArticlePageOrder, getArticlePageSearch, getArticlePageSort, getArticlePageType, getArticlePageView } from '../../model/selectors/articlesPageSelectors'
import { fetchArticleList } from '../../model/services/fetchArticleList/fetchArticleList'
import { articlePageAction } from '../../model/slices/articlesPageSlice'
import styles from './ArticlePageFilters.module.scss'

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
