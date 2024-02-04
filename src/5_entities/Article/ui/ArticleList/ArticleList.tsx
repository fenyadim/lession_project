import { type HTMLAttributeAnchorTarget, memo } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from '@/6_shared/lib/classNames/classNames'
import { Text } from '@/6_shared/ui/Text/Text'
import { type Article, ArticleView } from '../../model/types/article'
import { ArticleListItem } from '../ArticleListItem/ArticleListItem'
import {
    ArticleListItemSkeleton
} from '../ArticleListItem/ArticleListItemSkeleton'
import styles from './ArticleList.module.scss'

interface ArticleListProps {
    className?: string
    articles: Article[]
    isLoading?: boolean
    view?: ArticleView
    target?: HTMLAttributeAnchorTarget
}

const getSkeletons = (view: ArticleView) => {
    return new Array(view === ArticleView.SMALL ? 9 : 3).fill(0)
        .map((_, index) => (
            <ArticleListItemSkeleton
                className={ styles.card }
                view={ view }
                key={ index }
            />
        ))
}

export const ArticleList = memo((props: ArticleListProps) => {
    const {
        className,
        view = ArticleView.SMALL,
        articles,
        isLoading,
        target
    } = props

    const { t } = useTranslation()

    const renderArticle = (article: Article) => {
        return (
            <ArticleListItem
                article={ article }
                view={ view }
                className={ styles.card }
                key={ article.id }
                target={ target }
            />
        )
    }

    if (!isLoading && !articles) {
        return (
            <div
                className={ classNames('', {},
                    [className, styles[view]]) }
            >
                <Text
                    align="center"
                    theme="error"
                    size="l"
                    title={ t('Статьи не найдены') }
                />
            </div>
        )
    }

    return (

        <div
            className={ classNames('', {},
                [className, styles[view]]) }
            data-testid='ArticleList'
        >
            { articles.length > 0
                ? articles.map(renderArticle)
                : null
            }
            { isLoading && getSkeletons(view) }
        </div>
    )
})

ArticleList.displayName = 'ArticleList'
