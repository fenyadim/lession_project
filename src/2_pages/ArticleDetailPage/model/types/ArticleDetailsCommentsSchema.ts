import { type CommentType } from '5_entities/Comment'
import { type EntityState } from '@reduxjs/toolkit'

export interface ArticleDetailsCommentsSchema extends EntityState<CommentType> {
    isLoading?: boolean
    error?: string
}
