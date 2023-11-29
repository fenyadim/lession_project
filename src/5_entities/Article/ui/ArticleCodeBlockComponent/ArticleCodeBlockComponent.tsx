import { memo } from 'react'
import { classNames } from '@/6_shared/lib/classNames/classNames'
import { Code } from '@/6_shared/ui/Code/Code'
import { type ArticleCodeBlock } from '../../model/types/article'

interface ArticleCodeBlockComponentProps {
    className?: string
    block: ArticleCodeBlock
}

export const ArticleCodeBlockComponent = memo(
    (props: ArticleCodeBlockComponentProps) => {
        const { className, block } = props

        return (
            <div className={ classNames('', {},
                [className]) }>
                <Code text={ block.code }/>
            </div>
        )
    })

ArticleCodeBlockComponent.displayName = 'ArticleCodeBlockComponent'
