import { createAsyncThunk } from '@reduxjs/toolkit'
import { type ThunkConfig } from 'app/provides/StoreProvider'
import { type Article } from 'entities/Article'
import { getArticlePageLimit } from '../../selectors/articlesPageSelectors'

interface FetchArticleListProps {
    page?: number
}

export const fetchArticleList = createAsyncThunk<Article[], FetchArticleListProps, ThunkConfig<string>>(
    'articlesPage/fetchArticleList',
    async (props, thunkAPI) => {
        const { extra, rejectWithValue, getState } = thunkAPI
        const { page = 1 } = props
        const limit = getArticlePageLimit(getState())
        try {
            const response = await extra.api.get<Article[]>(
                '/articles', {
                    params: {
                        _expand: 'user',
                        _limit: limit,
                        _page: page
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
