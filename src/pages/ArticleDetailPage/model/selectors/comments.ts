import { type StateSchema } from 'app/provides/StoreProvider'

export const getArticleCommentsIsLoading = (state: StateSchema) => state.articleDetailsComments?.isLoading
export const getArticleCommentsError = (state: StateSchema) => state.articleDetailsComments?.error
