import { memo } from 'react'
import { classNames } from '@/6_shared/lib/classNames/classNames'
import { Text } from '@/6_shared/ui/Text/Text'
import { type ArticleImageBlock } from '../../model/types/article'
import styles from './ArticleImageBlockComponent.module.scss'

interface ArticleImageBlockComponentProps {
    className?: string
    block: ArticleImageBlock
}

export const ArticleImageBlockComponent = memo(
    (props: ArticleImageBlockComponentProps) => {
        const { className, block } = props

        return (
            <div className={ classNames(styles.ArticleImageBlockComponent, {},
                [className]) }>
                <img
                    src={ block.src }
                    className={ styles.img }
                    alt={ block.title }
                />
                { block.title && (
                    <Text text={ block.title } align="center"/>
                ) }
            </div>
        )
    })

ArticleImageBlockComponent.displayName = 'ArticleImageBlockComponent'
