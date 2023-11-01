import { createAsyncThunk } from '@reduxjs/toolkit'
import { type ThunkConfig } from 'app/provides/StoreProvider'
import { getArticlePageHasMore, getArticlePageIsLoading, getArticlePageNum } from '../../selectors/articlesPageSelectors'
import { articlePageAction } from '../../slices/articlesPageSlice'
import { fetchArticleList } from '../fetchArticleList/fetchArticleList'

// eslint-disable-next-line @typescript-eslint/no-invalid-void-type
export const fetchNextArticlePage = createAsyncThunk<void, undefined, ThunkConfig<string>>(
    'articlesPage/fetchNextArticlePage',
    async (_, thunkAPI) => {
        const { dispatch, getState } = thunkAPI
        const hasMore = getArticlePageHasMore(getState())
        const page = getArticlePageNum(getState())
        const isLoading = getArticlePageIsLoading(getState())

        if (hasMore && !isLoading) {
            void dispatch(articlePageAction.setPage(page + 1))
            void dispatch(fetchArticleList({
                page: page + 1
            }))
        }
    }
)
