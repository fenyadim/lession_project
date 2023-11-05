import { createAsyncThunk } from '@reduxjs/toolkit'
import { type ThunkConfig } from 'app/provides/StoreProvider'
import { getArticlePageInited } from '../../selectors/articlesPageSelectors'
import { articlePageAction } from '../../slices/articlesPageSlice'
import { fetchArticleList } from '../../services/fetchArticleList/fetchArticleList'
import { type SortOrder } from 'shared/types'
import { type ArticleSortField, type ArticleType } from 'entities/Article'

// eslint-disable-next-line @typescript-eslint/no-invalid-void-type
export const initArticlesPage = createAsyncThunk<void, URLSearchParams, ThunkConfig<string>>(
    'articlesPage/initArticlesPage',
    async (searchParams, thunkAPI) => {
        const { dispatch, getState } = thunkAPI
        const inited = getArticlePageInited(getState())

        if (!inited) {
            const orderFromUrl = searchParams.get('order') as SortOrder
            const sortFromUrl = searchParams.get('sort') as ArticleSortField
            const searchFromUrl = searchParams.get('search')
            const typeFromUrl = searchParams.get('type') as ArticleType

            if (orderFromUrl) {
                void dispatch(articlePageAction.setOrder(orderFromUrl))
            }
            if (sortFromUrl) {
                void dispatch(articlePageAction.setSort(sortFromUrl))
            }
            if (searchFromUrl) {
                void dispatch(articlePageAction.setSearch(searchFromUrl))
            }
            if (typeFromUrl) {
                void dispatch(articlePageAction.setType(typeFromUrl))
            }

            void dispatch(articlePageAction.initState())
            void dispatch(fetchArticleList({}))
        }
    }
)
