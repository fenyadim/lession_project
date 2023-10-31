import { createAsyncThunk } from '@reduxjs/toolkit'
import { type ThunkConfig } from 'app/provides/StoreProvider'
import { type Article } from 'entities/Article'

export const fetchArticleList = createAsyncThunk<Article[], undefined, ThunkConfig<string>>(
    'articlesPage/fetchArticleList',
    async (_, thunkAPI) => {
        const { extra, rejectWithValue } = thunkAPI
        try {
            const response = await extra.api.get<Article[]>(
                '/articles', {
                    params: {
                        _expand: 'user'
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
