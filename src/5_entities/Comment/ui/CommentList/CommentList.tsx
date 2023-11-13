import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from '6_shared/lib/classNames/classNames'
import { VStack } from '6_shared/ui/Stack'
import { Text } from '6_shared/ui/Text/Text'
import { type CommentType } from '../../model/types/comment'
import { CommentCard } from '../CommentCard/CommentCard'

interface CommentListProps {
    className?: string
    comments?: CommentType[]
    isLoading?: boolean
}

export const CommentList = memo((props: CommentListProps) => {
    const { className, comments, isLoading } = props
    const { t } = useTranslation()

    if (isLoading) {
        return (
            <VStack gap="16" max className={ classNames('', {}, [className]) }>
                <CommentCard isLoading/>
                <CommentCard isLoading/>
                <CommentCard isLoading/>
            </VStack>
        )
    }

    return (
        <VStack gap="16" max className={ classNames('', {}, [className]) }>
            { comments?.length
                ? comments.map(comment => (
                    <CommentCard
                        key={ comment.id }
                        isLoading={ isLoading }
                        comment={ comment }
                    />
                ))
                : <Text text={ t('Комментарии отсутствуют') }/>
            }
        </VStack>
    )
})

CommentList.displayName = 'CommentList'
