import { type EntityState } from '@reduxjs/toolkit'
import { type Article } from '@/5_entities/Article'

export interface ArticleDetailsRecommendationsSchema extends EntityState<Article> {
    isLoading?: boolean
    error?: string
}
