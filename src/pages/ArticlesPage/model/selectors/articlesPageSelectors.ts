import { type StateSchema } from 'app/provides/StoreProvider'
import { ArticleView } from 'entities/Article'

export const getArticlePageIsLoading = (state: StateSchema) => state.articlesPage?.isLoading
export const getArticlePageError = (state: StateSchema) => state.articlesPage?.error
export const getArticlePageView = (state: StateSchema) => state.articlesPage?.view ||
    ArticleView.SMALL

export const getArticlePageLimit = (state: StateSchema) => state.articlesPage?.limit ||
    9

export const getArticlePageHasMore = (state: StateSchema) => state.articlesPage?.hasMore

export const getArticlePageNum = (state: StateSchema) => state.articlesPage?.page ||
    1
export const getArticlePageInited = (state: StateSchema) => state.articlesPage?._inited
