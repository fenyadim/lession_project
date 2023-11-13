import { type HTMLAttributeAnchorTarget, memo } from 'react'
import { classNames } from '6_shared/lib/classNames/classNames'
import styles from './ArticleListItem.module.scss'
import { type Article, ArticleBlockType, type ArticleTextBlock, ArticleView } from '../../model/types/article'
import { Text } from '6_shared/ui/Text/Text'
import { Icon } from '6_shared/ui/Icon/Icon'
import IconEye from '6_shared/assets/icons/eye.svg'
import { Card } from '6_shared/ui/Card/Card'
import { Avatar } from '6_shared/ui/Avatar/Avatar'
import { Button } from '6_shared/ui/Button/Button'
import { useTranslation } from 'react-i18next'
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent'
import { RoutePath } from '6_shared/config/routeConfig/routeConfig'
import { AppLink } from '6_shared/ui/AppLink/AppLink'

interface ArticleListItemProps {
    className?: string
    article: Article
    view: ArticleView
    target?: HTMLAttributeAnchorTarget
}

export const ArticleListItem = memo((props: ArticleListItemProps) => {
    const { className, article, view, target } = props

    const { t } = useTranslation()

    const types = <Text
        text={ article.type.join(', ') }
        className={ styles.types }
    />

    const views = (
        <>
            <Text
                text={ String(article.views) }
                className={ styles.views }
            />
            <Icon Svg={ IconEye }/>
        </>
    )

    if (view === ArticleView.BIG) {
        const textBlock = article.blocks.find(
            block => block.type === ArticleBlockType.TEXT
        ) as ArticleTextBlock
        return (
            <div className={ classNames(styles.ArticleListItem, {},
                [className, styles[view]]) }
            >
                <Card>
                    <div className={ styles.header }>
                        { article.user.avatar &&
                            <Avatar size={ 30 } src={ article.user.avatar }/> }
                        <Text
                            text={ article.user.username }
                            className={ styles.username }
                        />
                        <Text
                            text={ article.createdAt }
                            className={ styles.date }
                        />
                    </div>
                    <Text title={ article.title } className={ styles.title }/>
                    { types }
                    <img
                        src={ article.img }
                        alt={ article.title }
                        className={ styles.image }
                    />
                    { textBlock && (
                        <ArticleTextBlockComponent
                            className={ styles.textBlock }
                            block={ textBlock }
                        />
                    ) }
                    <div className={ styles.footer }>
                        <AppLink to={ RoutePath.article_detail + article.id }>
                            <Button>
                                { t('Читать далее...') }
                            </Button>
                        </AppLink>
                        { views }
                    </div>
                </Card>
            </div>
        )
    }

    return (
        <AppLink
            target={ target }
            to={ RoutePath.article_detail + article.id }
            className={ classNames(styles.ArticleListItem, {},
                [className, styles[view]]) }
        >
            <Card>
                <div className={ styles.imageWrapper }>
                    <img
                        src={ article.img }
                        alt={ article.title }
                        className={ styles.img }
                    />
                    <Text text={ article.createdAt } className={ styles.date }/>
                </div>
                <div className={ styles.infoWrapper }>
                    { types }
                    { views }
                </div>
                <Text text={ article.title } className={ styles.title }/>
            </Card>
        </AppLink>
    )
})

ArticleListItem.displayName = 'ArticleListItem'
