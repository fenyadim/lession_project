import { combineReducers } from 'redux'
import { type ArticleDetailsPageSchema } from '../types'
import { articleDetailsRecommendationReducer } from 'pages/ArticleDetailPage/model/slices/articleDetailsRecommendationSlice'
import { articleDetailsCommentsReducer } from 'pages/ArticleDetailPage/model/slices/articleDetailsCommentsSlice'

export const articleDetailsPageReducer = combineReducers<ArticleDetailsPageSchema>(
    {
        recommendations: articleDetailsRecommendationReducer,
        comments: articleDetailsCommentsReducer
    })
