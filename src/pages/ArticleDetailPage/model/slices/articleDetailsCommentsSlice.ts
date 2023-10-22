import { createEntityAdapter, createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { type CommentType } from 'entities/Comment'
import { type StateSchema } from 'app/provides/StoreProvider'
import { type ArticleDetailsCommentsSchema } from '../types/ArticleDetailsCommentsSchema'
import { fetchCommentsByArticleId } from '../services/fetchCommentsByArticleId/fetchCommentsByArticleId'

const commentsAdapter = createEntityAdapter<CommentType>({
    selectId: (comment) => comment.id
})

export const getArticleComments = commentsAdapter.getSelectors<StateSchema>(
    (state) => state.articleDetailsComments || commentsAdapter.getInitialState()
)

const ArticleDetailsCommentsSlice = createSlice({
    name: 'articleDetailsComments',
    initialState: commentsAdapter.getInitialState<ArticleDetailsCommentsSchema>(
        {
            isLoading: false,
            error: undefined,
            ids: [],
            entities: {}
        }),
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchCommentsByArticleId.pending, (state) => {
            state.error = undefined
            state.isLoading = true
        })
        builder.addCase(fetchCommentsByArticleId.fulfilled,
            (state, action: PayloadAction<CommentType[]>) => {
                state.isLoading = false
                commentsAdapter.setAll(state, action.payload)
            })
        builder.addCase(fetchCommentsByArticleId.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.payload
        })
    }
})

export const { reducer: articleDetailsCommentsReducer } = ArticleDetailsCommentsSlice
