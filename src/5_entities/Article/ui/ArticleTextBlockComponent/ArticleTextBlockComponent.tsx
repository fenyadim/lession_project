import { memo } from 'react'
import { classNames } from '@/6_shared/lib/classNames/classNames'
import { Text } from '@/6_shared/ui/Text/Text'
import { type ArticleTextBlock } from '../../model/types/article'
import styles from './ArticleTextBlockComponent.module.scss'

interface ArticleTextBlockComponentProps {
    className?: string
    block: ArticleTextBlock
}

export const ArticleTextBlockComponent = memo(
    (props: ArticleTextBlockComponentProps) => {
        const { className, block } = props

        return (
            <div className={ classNames(styles.ArticleTextBlockComponent, {},
                [className]) }>
                { block.title && (
                    <Text title={ block.title } className={ styles.title }/>
                ) }
                { block.paragraphs.map((paragraph, index) => (
                    <Text
                        key={ index }
                        text={ paragraph }
                        className={ styles.paragraphs }
                    />
                )) }
            </div>
        )
    })

ArticleTextBlockComponent.displayName = 'ArticleTextBlockComponent'
