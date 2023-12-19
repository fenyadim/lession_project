import { type EntityState } from '@reduxjs/toolkit'
import { type Article, type ArticleSortField, type ArticleType, type ArticleView } from '@/5_entities/Article'
import { type SortOrder } from '@/6_shared/types/sort'

export interface ArticlesPageSchema extends EntityState<Article> {
    isLoading?: boolean
    error?: string
    // pagination
    page: number
    limit: number
    hasMore: boolean
    // filter
    view: ArticleView
    order: SortOrder
    sort: ArticleSortField
    search: string
    type: ArticleType

    _inited: boolean
}
