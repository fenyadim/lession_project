import type { RatingType } from '@/5_entities/Rating'
import { rtkApi } from '@/6_shared/api/rtkApi'

interface GetProfileRatingType {
    userId: string
    profileId: string
}

interface PostProfileRatingType {
    userId: string
    profileId: string
    rate: number
    feedback?: string
}

const profileRatingApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        getProfileRating: build.query<RatingType[], GetProfileRatingType>({
            query: ({ userId, profileId }) => ({
                url: '/profile-ratings',
                params: {
                    userId,
                    profileId
                }
            })
        }),
        setProfileRating: build.mutation<undefined, PostProfileRatingType>({
            query: (arg) => ({
                url: '/profile-ratings',
                method: 'POST',
                body: arg
            })
        })
    })
})
export const useGetProfileRating = profileRatingApi.useGetProfileRatingQuery
export const useSetProfileRating = profileRatingApi.useSetProfileRatingMutation
