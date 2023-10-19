import { memo } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import styles from './ArticleImageBlockComponent.module.scss'
import { type ArticleImageBlock } from '../../model/types/article'
import { Text } from 'shared/ui/Text/Text'

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
