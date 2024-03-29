import { type HTMLAttributeAnchorTarget, memo } from 'react'
import { useTranslation } from 'react-i18next'
import IconEye from '@/6_shared/assets/icons/eye.svg'
import { getRouteArticleDetails } from '@/6_shared/const/router'
import { classNames } from '@/6_shared/lib/classNames/classNames'
import { AppImage } from '@/6_shared/ui/AppImage/AppImage'
import { AppLink } from '@/6_shared/ui/AppLink/AppLink'
import { Avatar } from '@/6_shared/ui/Avatar/Avatar'
import { Button } from '@/6_shared/ui/Button/Button'
import { Card } from '@/6_shared/ui/Card/Card'
import { Icon } from '@/6_shared/ui/Icon/Icon'
import { Skeleton } from '@/6_shared/ui/Skeleton/Skeleton'
import { Text } from '@/6_shared/ui/Text/Text'
import { type Article, ArticleBlockType, type ArticleTextBlock, ArticleView } from '../../model/types/article'
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent'
import styles from './ArticleListItem.module.scss'

interface ArticleListItemProps {
    className?: string
    article: Article
    view: ArticleView
    target?: HTMLAttributeAnchorTarget
}

export const ArticleListItem = memo((props: ArticleListItemProps) => {
    const { className, article, view, target } = props

    const { t } = useTranslation()

    const types = (
        <Text
            data-testid="ArticleListItem.Type"
            text={article.type.join(', ')}
            className={styles.types}
        />
    )

    const views = (
        <>
            <Text
                text={String(article.views)}
                className={styles.views}
            />
            <Icon Svg={IconEye}/>
        </>
    )

    if (view === ArticleView.BIG) {
        const textBlock = article.blocks.find(
            block => block.type === ArticleBlockType.TEXT
        ) as ArticleTextBlock
        return (
            <div
                className={classNames(styles.ArticleListItem, {},
                    [className, styles[view]])}
                data-testid='ArticleListItem'
            >
                <Card>
                    <div className={styles.header}>
                        {article.user.avatar &&
                            <Avatar size={30} src={article.user.avatar}/>}
                        <Text
                            text={article.user.username}
                            className={styles.username}
                        />
                        <Text
                            text={article.createdAt}
                            className={styles.date}
                        />
                    </div>
                    <Text data-testid="ArticleListItem.Title" title={article.title} className={styles.title}/>
                    {types}
                    <AppImage
                        fallback={<Skeleton width={'100%'} height={250}/>}
                        src={article.img}
                        alt={article.title}
                        className={styles.image}
                    />
                    {textBlock && (
                        <ArticleTextBlockComponent
                            className={styles.textBlock}
                            block={textBlock}
                        />
                    )}
                    <div className={styles.footer}>
                        <AppLink to={getRouteArticleDetails(article.id)}>
                            <Button>
                                {t('Читать далее...')}
                            </Button>
                        </AppLink>
                        {views}
                    </div>
                </Card>
            </div>
        )
    }

    return (
        <AppLink
            data-testid='ArticleListItem'
            target={target}
            to={getRouteArticleDetails(article.id)}
            className={classNames(styles.ArticleListItem, {},
                [className, styles[view]])}
        >
            <Card>
                <div className={styles.imageWrapper}>
                    <AppImage
                        fallback={<Skeleton height={200} width={200}/>}
                        src={article.img}
                        alt={article.title}
                        className={styles.img}
                    />
                    <Text text={article.createdAt} className={styles.date}/>
                </div>
                <div className={styles.infoWrapper}>
                    {types}
                    {views}
                </div>
                <Text data-testid="ArticleListItem.Title" text={article.title} className={styles.title}/>
            </Card>
        </AppLink>
    )
})

ArticleListItem.displayName = 'ArticleListItem'
