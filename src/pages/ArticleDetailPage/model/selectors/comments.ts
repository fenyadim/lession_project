import { type StateSchema } from 'app/provides/StoreProvider'

export const getArticleCommentsIsLoading = (state: StateSchema) => state.articleDetailsPage?.comments?.isLoading
export const getArticleCommentsError = (state: StateSchema) => state.articleDetailsPage?.comments?.error
