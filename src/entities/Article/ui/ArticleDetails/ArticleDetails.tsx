import { memo, useCallback, useEffect } from 'react'
import { useSelector } from 'react-redux'
import styles from './ArticleDetails.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import { DynamicModuleLoader, type ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { articleDetailsReducer } from '../../model/slices/articleDetailsSlice'
import { fetchArticleById } from '../../model/services/fetchArticleById/fetchArticleById'
import { getArticleDetailsData, getArticleDetailsError, getArticleDetailsIsLoading } from '../../model/selectors/articleDetails'
import { Text } from 'shared/ui/Text/Text'
import { useTranslation } from 'react-i18next'
import { Skeleton } from 'shared/ui/Skeleton/Skeleton'
import { Avatar } from 'shared/ui/Avatar/Avatar'
import EyeIcon from 'shared/assets/icons/eye.svg'
import CalendarIcon from 'shared/assets/icons/calendar.svg'
import { Icon } from 'shared/ui/Icon/Icon'
import { type ArticleBlock, ArticleBlockType } from '../../model/types/article'
import { ArticleCodeBlockComponent } from '../ArticleCodeBlockComponent/ArticleCodeBlockComponent'
import { ArticleImageBlockComponent } from '../ArticleImageBlockComponent/ArticleImageBlockComponent'
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent'

interface ArticleDetailsProps {
    className?: string
    id: string
}

const reducers: ReducersList = {
    articleDetails: articleDetailsReducer
}

export const ArticleDetails = memo((props: ArticleDetailsProps) => {
    const { className, id } = props

    const { t } = useTranslation('article-details')
    const isLoading = useSelector(getArticleDetailsIsLoading)
    const error = useSelector(getArticleDetailsError)
    const article = useSelector(getArticleDetailsData)
    const dispatch = useAppDispatch()

    const renderBlock = useCallback((block: ArticleBlock) => {
        switch (block.type) {
        case ArticleBlockType.CODE:
            return <ArticleCodeBlockComponent
                key={ block.id }
                className={ styles.block }
                block={ block }
            />
        case ArticleBlockType.IMAGE:
            return <ArticleImageBlockComponent
                key={ block.id }
                className={ styles.block }
                block={ block }
            />
        case ArticleBlockType.TEXT:
            return <ArticleTextBlockComponent
                key={ block.id }
                className={ styles.block }
                block={ block }
            />
        default:
            return null
        }
    }, [])

    useEffect(() => {
        if (__PROJECT__ !== 'storybook') {
            void dispatch(fetchArticleById(id))
        }
    }, [dispatch, id])

    let content

    if (isLoading) {
        content = (
            <>
                <Skeleton className={ styles.avatar } width={ 200 }
                    height={ 200 } border={ '50%' }/>
                <Skeleton className={ styles.title } width={ 300 }
                    height={ 32 }/>
                <Skeleton className={ styles.skeleton } width={ 600 }
                    height={ 24 }/>
                <Skeleton className={ styles.skeleton } width={ '100%' }
                    height={ 200 }/>
                <Skeleton className={ styles.skeleton } width={ '100%' }
                    height={ 200 }/>
            </>
        )
    } else if (error) {
        content = (
            <Text
                align="center"
                title={ t('Произошла ошибка при загрузке статьи.') }
            />
        )
    } else {
        content = (
            <>
                <div className={ styles.avatarWrapper }>
                    <Avatar
                        src={ article?.img as string }
                        alt={ article?.title }
                        size={ 200 }
                        className={ styles.avatar }
                    />
                </div>
                <Text
                    className={ styles.title }
                    title={ article?.title }
                    text={ article?.subtitle }
                    size="l"
                />
                <div>
                    <div className={ styles.articleInfo }>
                        <Icon className={ styles.icon } Svg={ EyeIcon }/>
                        <Text text={ String(article?.views) }/>
                    </div>
                    <div className={ styles.articleInfo }>
                        <Icon className={ styles.icon } Svg={ CalendarIcon }/>
                        <Text text={ article?.createdAt }/>
                    </div>
                </div>
                { article?.blocks.map(renderBlock) }
            </>
        )
    }

    return (
        <DynamicModuleLoader
            reducers={ reducers }
            removeAfterUnmount
        >
            <div className={
                classNames(styles.ArticleDetails, {}, [className])
            }>
                { content }
            </div>
        </DynamicModuleLoader>
    )
})

ArticleDetails.displayName = 'ArticleDetails'
