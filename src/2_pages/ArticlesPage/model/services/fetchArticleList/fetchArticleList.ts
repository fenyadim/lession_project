import { createAsyncThunk } from '@reduxjs/toolkit'
import { type ThunkConfig } from '1_app/provides/StoreProvider'
import { type Article, ArticleType } from '5_entities/Article'
import { getArticlePageLimit, getArticlePageNum, getArticlePageOrder, getArticlePageSearch, getArticlePageSort, getArticlePageType } from '../../selectors/articlesPageSelectors'
import { addQueryParams } from '6_shared/lib/url/addQueryParams/addQueryParams'

interface FetchArticleListProps {
    replace?: boolean
}

export const fetchArticleList = createAsyncThunk<Article[], FetchArticleListProps, ThunkConfig<string>>(
    'articlesPage/fetchArticleList',
    async (props, thunkAPI) => {
        const { extra, rejectWithValue, getState } = thunkAPI
        const limit = getArticlePageLimit(getState())
        const page = getArticlePageNum(getState())
        const sort = getArticlePageSort(getState())
        const order = getArticlePageOrder(getState())
        const search = getArticlePageSearch(getState())
        const type = getArticlePageType(getState())

        try {
            addQueryParams({ sort, order, search, type })
            const response = await extra.api.get<Article[]>(
                '/articles', {
                    params: {
                        _expand: 'user',
                        _limit: limit,
                        _page: page,
                        _sort: sort,
                        _order: order,
                        type: type === ArticleType.ALL ? undefined : type,
                        q: search
                    }
                })

            if (!response.data) {
                throw new Error()
            }

            return response.data
        } catch (e) {
            console.log(e)
            return rejectWithValue('Что-то пошло не так!')
        }
    }
)
