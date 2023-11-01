import { createEntityAdapter, createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { type StateSchema } from 'app/provides/StoreProvider'
import { type Article, ArticleView } from 'entities/Article'
import { type ArticlesPageSchema } from '../types/articlesPageSchema'
import { fetchArticleList } from '../services/fetchArticleList/fetchArticleList'
import { ARTICLE_VIEW_LOCALSTORAGE_KEY } from 'shared/const/localStorage'

const articlesAdapter = createEntityAdapter<Article>({
    selectId: (article) => article.id
})

export const getArticles = articlesAdapter.getSelectors<StateSchema>(
    (state) => state.articlesPage || articlesAdapter.getInitialState()
)

const ArticlePageSlice = createSlice({
    name: 'articlePage',
    initialState: articlesAdapter.getInitialState<ArticlesPageSchema>(
        {
            isLoading: false,
            error: undefined,
            ids: [],
            entities: {},
            view: ArticleView.SMALL,
            page: 1,
            hasMore: true
        }),
    reducers: {
        setView: (state, action: PayloadAction<ArticleView>) => {
            state.view = action.payload
            localStorage.setItem(ARTICLE_VIEW_LOCALSTORAGE_KEY, action.payload)
        },
        setPage: (state, action: PayloadAction<number>) => {
            state.page = action.payload
        },
        initState: state => {
            const view = localStorage.getItem(
                ARTICLE_VIEW_LOCALSTORAGE_KEY) as ArticleView
            state.view = view
            state.limit = view === ArticleView.BIG ? 4 : 9
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchArticleList.pending, (state) => {
            state.error = undefined
            state.isLoading = true
        })
        builder.addCase(fetchArticleList.fulfilled,
            (state, action: PayloadAction<Article[]>) => {
                state.isLoading = false
                articlesAdapter.addMany(state, action.payload)
                state.hasMore = action.payload.length > 0
            })
        builder.addCase(fetchArticleList.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.payload
        })
    }
})

export const {
    reducer: articlePageReducer,
    actions: articlePageAction
} = ArticlePageSlice
