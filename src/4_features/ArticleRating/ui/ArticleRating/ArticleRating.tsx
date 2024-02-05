import { memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { RatingCard } from '@/5_entities/Rating'
import { getUserAuthData } from '@/5_entities/User'
import { Skeleton } from '@/6_shared/ui/Skeleton/Skeleton'
import {
    useGetArticleRating,
    useSetArticleRating,
} from '../../api/articleRatingApi'

export interface ArticleRatingProps {
    className?: string
    articleId: string
}

const ArticleRating = memo((props: ArticleRatingProps) => {
    const { className, articleId } = props

    const { t } = useTranslation()

    const userData = useSelector(getUserAuthData)

    const { data, isLoading } = useGetArticleRating({
        articleId,
        userId: userData?.id ?? '',
    })

    const [rateArticleMutation] = useSetArticleRating()

    const handleRate = useCallback(
        (starsCount: number, feedback?: string) => {
            try {
                void rateArticleMutation({
                    userId: userData?.id ?? '',
                    rate: starsCount,
                    articleId,
                    feedback,
                })
            } catch (e) {
                console.log(e)
            }
        },
        [articleId, rateArticleMutation, userData?.id],
    )

    const onAccept = useCallback(
        (starsCount: number, feedback?: string) => {
            handleRate(starsCount, feedback)
        },
        [handleRate],
    )

    const onCancel = useCallback(
        (starsCount: number) => {
            handleRate(starsCount)
        },
        [handleRate],
    )

    if (isLoading) {
        return <Skeleton width="100%" height={120} />
    }

    const articleRate = data?.[0]

    return (
        <RatingCard
            className={className}
            title={t('Оцените статью')}
            feedbackTitle={t(
                'Оставьте свой отзыв, это поможет улучшить качество',
            )}
            rate={articleRate?.rate}
            onAccept={onAccept}
            onCancel={onCancel}
        />
    )
})

export default ArticleRating

ArticleRating.displayName = 'ArticleRating'
