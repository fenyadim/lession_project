import { createAsyncThunk } from '@reduxjs/toolkit'
import { type ThunkConfig } from 'app/provides/StoreProvider'
import { getArticlePageInited, getArticlePageNum } from '../../selectors/articlesPageSelectors'
import { articlePageAction } from '../../slices/articlesPageSlice'
import { fetchArticleList } from '../../services/fetchArticleList/fetchArticleList'

// eslint-disable-next-line @typescript-eslint/no-invalid-void-type
export const initArticlesPage = createAsyncThunk<void, undefined, ThunkConfig<string>>(
    'articlesPage/initArticlesPage',
    async (_, thunkAPI) => {
        const { dispatch, getState } = thunkAPI
        const inited = getArticlePageInited(getState())
        const page = getArticlePageNum(getState())

        if (!inited) {
            void dispatch(articlePageAction.initState())
            void dispatch(fetchArticleList({
                page
            }))
        }
    }
)
