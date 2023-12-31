import { createEntityAdapter, createSlice } from '@reduxjs/toolkit'
import { type StateSchema } from '@/1_app/provides/StoreProvider'
import { type Article } from '@/5_entities/Article'
import { fetchArticleRecommendations } from '../services/fetchArticleRecommendations/fetchArticleRecommendations'
import { type ArticleDetailsRecommendationsSchema } from '../types/ArticleDetailsRecommendationsSchema'

const recommendationsAdapter = createEntityAdapter<Article>({
    selectId: (article) => article.id
})

export const getArticleRecommendations = recommendationsAdapter.getSelectors<StateSchema>(
    (state) => state.articleDetailsPage?.recommendations ||
        recommendationsAdapter.getInitialState()
)

const articleDetailsRecommendationSlice = createSlice({
    name: 'articleDetailsRecommendation',
    initialState: recommendationsAdapter.getInitialState<ArticleDetailsRecommendationsSchema>(
        {
            isLoading: false,
            error: undefined,
            ids: [],
            entities: {}
        }),
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchArticleRecommendations.pending, (state) => {
            state.error = undefined
            state.isLoading = true
        })
        builder.addCase(fetchArticleRecommendations.fulfilled,
            (state, action) => {
                state.isLoading = false
                recommendationsAdapter.setAll(state, action.payload)
            })
        builder.addCase(fetchArticleRecommendations.rejected,
            (state, action) => {
                state.isLoading = false
                state.error = action.payload
            })
    }
})

export const { reducer: articleDetailsRecommendationReducer } = articleDetailsRecommendationSlice
