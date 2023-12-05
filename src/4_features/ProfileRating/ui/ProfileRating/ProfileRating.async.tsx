import { lazy, Suspense } from 'react'
import { Skeleton } from '@/6_shared/ui/Skeleton/Skeleton'
import type { ProfileRatingProps } from './ProfileRating'

const ProfileRatingLazy = lazy(async () => await import('./ProfileRating'))

export const ProfileRatingAsync = (props: ProfileRatingProps) => {
    return (
        <Suspense fallback={<Skeleton width="100%" height={140}/>}>
            <ProfileRatingLazy {...props}/>
        </Suspense>
    )
}
