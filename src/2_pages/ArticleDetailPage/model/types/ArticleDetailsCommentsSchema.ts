import { type EntityState } from '@reduxjs/toolkit'
import { type CommentType } from '@/5_entities/Comment'

export interface ArticleDetailsCommentsSchema extends EntityState<CommentType> {
    isLoading?: boolean
    error?: string
}
