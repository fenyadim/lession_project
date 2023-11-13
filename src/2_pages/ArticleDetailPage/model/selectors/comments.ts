import { type StateSchema } from '1_app/provides/StoreProvider'

export const getArticleCommentsIsLoading = (state: StateSchema) => state.articleDetailsPage?.comments?.isLoading
export const getArticleCommentsError = (state: StateSchema) => state.articleDetailsPage?.comments?.error
