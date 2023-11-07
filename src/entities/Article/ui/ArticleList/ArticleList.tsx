import { type HTMLAttributeAnchorTarget, memo } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import styles from './ArticleList.module.scss'
import { type Article, ArticleView } from '../../model/types/article'
import { ArticleListItem } from '../ArticleListItem/ArticleListItem'
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton'
import { Text } from 'shared/ui/Text/Text'
import { useTranslation } from 'react-i18next'

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

    if (!isLoading && !articles.length) {
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
