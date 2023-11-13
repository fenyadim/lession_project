import { createAsyncThunk } from '@reduxjs/toolkit'
import { type ThunkConfig } from '1_app/provides/StoreProvider'
import { type CommentType } from '5_entities/Comment'

export const fetchCommentsByArticleId = createAsyncThunk<CommentType[], string | undefined, ThunkConfig<string>>(
    'articleDetails/fetchCommentsByArticleId',
    async (articleId, thunkAPI) => {
        const { extra, rejectWithValue } = thunkAPI

        if (!articleId) {
            return rejectWithValue('error')
        }

        try {
            const response = await extra.api.get<CommentType[]>(
                '/comments', {
                    params: {
                        articleId,
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
