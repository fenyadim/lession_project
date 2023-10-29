import { memo, useCallback } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import styles from './ArticleListItem.module.scss'
import { type Article, ArticleBlockType, type ArticleTextBlock, ArticleView } from '../../model/types/article'
import { Text } from 'shared/ui/Text/Text'
import { Icon } from 'shared/ui/Icon/Icon'
import IconEye from 'shared/assets/icons/eye.svg'
import { Card } from 'shared/ui/Card/Card'
import { Avatar } from 'shared/ui/Avatar/Avatar'
import { Button } from 'shared/ui/Button/Button'
import { useTranslation } from 'react-i18next'
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent'
import { useNavigate } from 'react-router-dom'
import { RoutePath } from 'shared/config/routeConfig/routeConfig'

interface ArticleListItemProps {
    className?: string
    article: Article
    view: ArticleView
}

export const ArticleListItem = memo((props: ArticleListItemProps) => {
    const { className, article, view } = props

    const { t } = useTranslation()
    const navigate = useNavigate()

    const onOpenArticle = useCallback(() => {
        navigate(RoutePath.article_detail + article.id)
    }, [article.id, navigate])

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
                        <Button onClick={ onOpenArticle }>
                            { t('Читать далее...') }
                        </Button>
                        { views }
                    </div>
                </Card>
            </div>
        )
    }

    return (
        <div className={ classNames(styles.ArticleListItem, {},
            [className, styles[view]]) }
        >
            <Card onClick={ onOpenArticle }>
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
        </div>
    )
})

ArticleListItem.displayName = 'ArticleListItem'