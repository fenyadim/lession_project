import { memo, useCallback, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import CalendarIcon from '6_shared/assets/icons/calendar.svg'
import EyeIcon from '6_shared/assets/icons/eye.svg'
import { classNames } from '6_shared/lib/classNames/classNames'
import { DynamicModuleLoader, type ReducersList } from '6_shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { useAppDispatch } from '6_shared/lib/hooks/useAppDispatch/useAppDispatch'
import { Avatar } from '6_shared/ui/Avatar/Avatar'
import { Icon } from '6_shared/ui/Icon/Icon'
import { Skeleton } from '6_shared/ui/Skeleton/Skeleton'
import { HStack, VStack } from '6_shared/ui/Stack'
import { Text } from '6_shared/ui/Text/Text'
import { getArticleDetailsData, getArticleDetailsError, getArticleDetailsIsLoading } from '../../model/selectors/articleDetails'
import { fetchArticleById } from '../../model/services/fetchArticleById/fetchArticleById'
import { articleDetailsReducer } from '../../model/slices/articleDetailsSlice'
import { type ArticleBlock, ArticleBlockType } from '../../model/types/article'
import { ArticleCodeBlockComponent } from '../ArticleCodeBlockComponent/ArticleCodeBlockComponent'
import { ArticleImageBlockComponent } from '../ArticleImageBlockComponent/ArticleImageBlockComponent'
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent'
import styles from './ArticleDetails.module.scss'

interface ArticleDetailsProps {
    className?: string
    id?: string
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
                <HStack justify="center" max className={ styles.avatarWrapper }>
                    <Avatar
                        src={ article?.img as string }
                        alt={ article?.title }
                        size={ 200 }
                        className={ styles.avatar }
                    />
                </HStack>
                <VStack gap="4" max>
                    <Text
                        className={ styles.title }
                        title={ article?.title }
                        text={ article?.subtitle }
                        size="l"
                    />
                    <HStack gap="8" className={ styles.articleInfo }>
                        <Icon className={ styles.icon } Svg={ EyeIcon }/>
                        <Text text={ String(article?.views) }/>
                    </HStack>
                    <HStack gap="8" className={ styles.articleInfo }>
                        <Icon className={ styles.icon } Svg={ CalendarIcon }/>
                        <Text text={ article?.createdAt }/>
                    </HStack>
                </VStack>
                { article?.blocks.map(renderBlock) }
            </>
        )
    }

    return (
        <DynamicModuleLoader
            reducers={ reducers }
            removeAfterUnmount
        >
            <VStack gap="16" max className={
                classNames(styles.ArticleDetails, {}, [className])
            }>
                { content }
            </VStack>
        </DynamicModuleLoader>
    )
})

ArticleDetails.displayName = 'ArticleDetails'
