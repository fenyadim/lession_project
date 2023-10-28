import { memo } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import styles from './CommentList.module.scss'
import { type CommentType } from '../../model/types/comment'
import { Text } from 'shared/ui/Text/Text'
import { useTranslation } from 'react-i18next'
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
            <div className={ classNames(styles.CommentList, {}, [className]) }>
                <CommentCard isLoading/>
                <CommentCard isLoading/>
                <CommentCard isLoading/>
            </div>
        )
    }

    return (
        <div className={ classNames(styles.CommentList, {}, [className]) }>
            { comments?.length
                ? comments.map(comment => (
                    <CommentCard
                        key={ comment.id }
                        isLoading={ isLoading }
                        className={ styles.comment }
                        comment={ comment }
                    />
                ))
                : <Text text={ t('Комментарии отсутствуют') }/>
            }
        </div>
    )
})

CommentList.displayName = 'CommentList'
