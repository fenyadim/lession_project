import { createAsyncThunk } from '@reduxjs/toolkit'
import { type ThunkConfig } from '@/1_app/provides/StoreProvider'
import { type Article } from '../../types/article'

export const fetchArticleById = createAsyncThunk<Article, string | undefined, ThunkConfig<string>>(
    'article/fetchArticleById',
    async (articleId, thunkAPI) => {
        const { extra, rejectWithValue } = thunkAPI

        try {
            if (!articleId) {
                throw new Error('Что-то пошло не так')
            }
            const response = await extra.api.get<Article>(
                `/articles/${articleId}`, {
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
