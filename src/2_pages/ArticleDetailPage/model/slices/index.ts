import { combineReducers } from 'redux'
import { articleDetailsCommentsReducer } from '../slices/articleDetailsCommentsSlice'
import { articleDetailsRecommendationReducer } from '../slices/articleDetailsRecommendationSlice'
import { type ArticleDetailsPageSchema } from '../types'

export const articleDetailsPageReducer = combineReducers<ArticleDetailsPageSchema>(
    {
        recommendations: articleDetailsRecommendationReducer,
        comments: articleDetailsCommentsReducer
    })
