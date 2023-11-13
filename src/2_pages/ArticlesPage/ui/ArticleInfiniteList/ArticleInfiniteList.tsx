import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { Page } from '3_widgets/Page/Page'
import { ArticleList } from '5_entities/Article'
import { Text } from '6_shared/ui/Text/Text'
import { getArticlePageError, getArticlePageIsLoading, getArticlePageView } from '../../model/selectors/articlesPageSelectors'
import { getArticles } from '../../model/slices/articlesPageSlice'

interface ArticleInfiniteListProps {
    className?: string
}

export const ArticleInfiniteList = memo((props: ArticleInfiniteListProps) => {
    const { className } = props

    const { t } = useTranslation()
    const articles = useSelector(getArticles.selectAll)
    const isLoading = useSelector(getArticlePageIsLoading)
    const view = useSelector(getArticlePageView)
    const error = useSelector(getArticlePageError)

    if (error) {
        return (
            <Page>
                <Text title={ t('Что-то пошло не так') } theme="error"/>
            </Page>
        )
    }

    return (
        <ArticleList
            isLoading={ isLoading }
            view={ view }
            articles={ articles }
            className={ className }
        />
    )
})

ArticleInfiniteList.displayName = 'ArticleInfiniteList'
