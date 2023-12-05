import { memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { RatingCard } from '@/5_entities/Rating'
import { getUserAuthData } from '@/5_entities/User'
import { Skeleton } from '@/6_shared/ui/Skeleton/Skeleton'
import { useGetProfileRating, useSetProfileRating } from '../../api/profileRatingApi'

export interface ProfileRatingProps {
    className?: string
    profileId: string
}

const ProfileRating = memo((props: ProfileRatingProps) => {
    const { className, profileId } = props

    const { t } = useTranslation()

    const userData = useSelector(getUserAuthData)

    const { data, isLoading } = useGetProfileRating({
        profileId,
        userId: userData?.id ?? ''
    })

    const [rateArticleMutation] = useSetProfileRating()

    const handleRate = useCallback((starsCount: number, feedback?: string) => {
        try {
            void rateArticleMutation({
                userId: userData?.id ?? '',
                rate: starsCount,
                profileId,
                feedback
            })
        } catch (e) {
            console.log(e)
        }
    }, [profileId, rateArticleMutation, userData?.id])

    const onAccept = useCallback((starsCount: number, feedback?: string) => {
        handleRate(starsCount, feedback)
    }, [handleRate])

    const onCancel = useCallback((starsCount: number) => {
        handleRate(starsCount)
    }, [handleRate])

    if (profileId === userData?.id) return null

    if (isLoading) {
        return <Skeleton width='100%' height={120}/>
    }

    const profileRate = data?.[0]

    return (
        <RatingCard
            className={className}
            title={t('Оцените данный профиль')}
            feedbackTitle={t('Оставьте свой отзыв, это поможет улучшить качество')}
            rate={profileRate?.rate}
            onAccept={onAccept}
            onCancel={onCancel}
        />
    )
})

export default ProfileRating

ProfileRating.displayName = 'ProfileRating'
