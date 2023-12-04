import type { RatingType } from '@/5_entities/Rating'
import { rtkApi } from '@/6_shared/api/rtkApi'

interface GetArticleRatingType {
    userId: string
    articleId: string
}

interface PostArticleRatingType {
    userId: string
    articleId: string
    rate: number
    feedback?: string
}

const articleRatingApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        getArticleRating: build.query<RatingType[], GetArticleRatingType>({
            query: ({ userId, articleId }) => ({
                url: '/article-ratings',
                params: {
                    userId,
                    articleId
                }
            })
        }),
        setArticleRating: build.mutation<undefined, PostArticleRatingType>({
            query: (arg) => ({
                url: '/article-ratings',
                method: 'POST',
                body: arg
            })
        })
    })
})
export const useGetArticleRating = articleRatingApi.useGetArticleRatingQuery
export const useSetArticleRating = articleRatingApi.useSetArticleRatingMutation
