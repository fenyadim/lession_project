import { memo } from 'react'
import { classNames } from '@/6_shared/lib/classNames/classNames'
import { Card } from '@/6_shared/ui/Card/Card'
import { Skeleton } from '@/6_shared/ui/Skeleton/Skeleton'
import { ArticleView } from '../../model/types/article'
import styles from './ArticleListItem.module.scss'

interface ArticleListItemSkeletonProps {
    className?: string
    view: ArticleView
}

export const ArticleListItemSkeleton = memo(
    (props: ArticleListItemSkeletonProps) => {
        const { className, view } = props

        if (view === ArticleView.BIG) {
            return (
                <div className={ classNames(styles.ArticleListItem, {},
                    [className, styles[view]]) }
                >
                    <Card>
                        <div className={ styles.header }>
                            <Skeleton
                                width={ 30 }
                                height={ 30 }
                                border={ '50%' }
                            />
                            <Skeleton
                                width={ 150 }
                                height={ 16 }
                                className={ styles.username }
                            />
                            <Skeleton
                                width={ 150 }
                                height={ 16 }
                                className={ styles.date }
                            />
                        </div>
                        <Skeleton
                            width={ 250 }
                            height={ 24 }
                            className={ styles.title }
                        />
                        <Skeleton
                            height={ 200 }
                            className={ styles.image }
                        />
                        <div className={ styles.footer }>
                            <Skeleton width={ 200 } height={ 36 }/>
                        </div>
                    </Card>
                </div>
            )
        }

        return (
            <div className={ classNames(styles.ArticleListItem, {},
                [className, styles[view]]) }
            >
                <Card>
                    <div className={ styles.imageWrapper }>
                        <Skeleton width={ 200 } height={ 200 }/>
                    </div>
                    <div className={ styles.infoWrapper }>
                        <Skeleton width={ 130 } height={ 16 }/>
                    </div>
                    <Skeleton width={ 150 } height={ 16 }
                        className={ styles.title }/>
                </Card>
            </div>
        )
    })

ArticleListItemSkeleton.displayName = 'ArticleListItemSkeleton'
