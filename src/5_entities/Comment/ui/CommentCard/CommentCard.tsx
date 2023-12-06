import { memo } from 'react'
import { RoutePath } from '@/6_shared/const/router'
import { classNames } from '@/6_shared/lib/classNames/classNames'
import { AppLink } from '@/6_shared/ui/AppLink/AppLink'
import { Avatar } from '@/6_shared/ui/Avatar/Avatar'
import { Skeleton } from '@/6_shared/ui/Skeleton/Skeleton'
import { VStack } from '@/6_shared/ui/Stack'
import { Text } from '@/6_shared/ui/Text/Text'
import { type CommentType } from '../../model/types/comment'
import styles from './CommentCard.module.scss'

interface CommentCardProps {
    className?: string
    comment?: CommentType
    isLoading?: boolean
}

export const CommentCard = memo((props: CommentCardProps) => {
    const { className, comment, isLoading } = props

    if (isLoading) {
        return (
            <VStack gap="8" max className={classNames(styles.CommentCard, {},
                [className, styles.loading])}>
                <div className={styles.header}>
                    <Skeleton width={30} height={30} border={'50%'}/>
                    <Skeleton
                        className={styles.username}
                        width={100}
                        height={16}
                    />
                </div>
                <Skeleton
                    className={styles.text}
                    width={'100%'}
                    height={50}
                />
            </VStack>
        )
    }

    if (!comment) {
        return null
    }

    return (
        <VStack gap="8" max
            className={classNames(styles.CommentCard, {}, [className])}>
            <AppLink
                to={`${RoutePath.profile}${comment.user.id}`}
                className={styles.header}
            >
                {comment.user.avatar
                    ? (
                        <Avatar
                            src={comment.user.avatar}
                            size={30}
                        />
                    )
                    : null}
                <Text
                    className={styles.username}
                    title={comment.user.username}
                />
            </AppLink>
            <Text className={styles.text} text={comment.text}/>
        </VStack>
    )
})

CommentCard.displayName = 'CommentCard'
