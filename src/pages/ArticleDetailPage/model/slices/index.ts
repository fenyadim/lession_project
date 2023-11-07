import { combineReducers } from 'redux'
import { type ArticleDetailsPageSchema } from '../types'
import { articleDetailsRecommendationReducer } from '../slices/articleDetailsRecommendationSlice'
import { articleDetailsCommentsReducer } from '../slices/articleDetailsCommentsSlice'

export const articleDetailsPageReducer = combineReducers<ArticleDetailsPageSchema>(
    {
        recommendations: articleDetailsRecommendationReducer,
        comments: articleDetailsCommentsReducer
    })
