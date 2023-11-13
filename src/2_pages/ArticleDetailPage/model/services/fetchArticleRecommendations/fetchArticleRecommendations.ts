import { createAsyncThunk } from '@reduxjs/toolkit'
import { type ThunkConfig } from '1_app/provides/StoreProvider'
import { type Article } from '5_entities/Article'

export const fetchArticleRecommendations = createAsyncThunk<Article[], undefined, ThunkConfig<string>>(
    'articlesDetailsPage/fetchArticleRecommendations',
    async (_, thunkAPI) => {
        const { extra, rejectWithValue } = thunkAPI

        try {
            const response = await extra.api.get<Article[]>(
                '/articles', {
                    params: {
                        _expand: 'user',
                        _limit: 4
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
