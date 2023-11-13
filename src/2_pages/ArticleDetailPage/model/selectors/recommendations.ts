import { type StateSchema } from '1_app/provides/StoreProvider'

export const getArticleRecommendationsIsLoading = (state: StateSchema) => state.articleDetailsPage?.recommendations?.isLoading
export const getArticleRecommendationsError = (state: StateSchema) => state.articleDetailsPage?.recommendations?.error
