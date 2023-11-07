import { createAsyncThunk } from '@reduxjs/toolkit'
import { getUserAuthData } from 'entities/User'
import { type ThunkConfig } from 'app/provides/StoreProvider'
import { getArticleDetailsData } from 'entities/Article'
import { getAddCommentFormText } from '../../selectors/addCommentFormSelectors'
import { addCommentFormActions } from '../../slices/addCommentFormSlice'

export const sendComment = createAsyncThunk<Comment, undefined, ThunkConfig<string>>(
    'addCommentForm/sendComment',
    async (authData, thunkAPI) => {
        const { extra, dispatch, rejectWithValue, getState } = thunkAPI

        const user = getUserAuthData(getState())
        const text = getAddCommentFormText(getState())
        const article = getArticleDetailsData(getState())

        if (!user || !text || !article) {
            return rejectWithValue('no data')
        }

        try {
            const response = await extra.api.post<Comment>('/comments', {
                articleId: article?.id,
                userId: user.id,
                text
            })

            if (!response.data) {
                throw new Error()
            }

            dispatch(addCommentFormActions.setText(''))

            return response.data
        } catch (e) {
            return rejectWithValue('Неверно введен логин или пароль')
        }
    }
)
