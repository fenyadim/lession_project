import { createAsyncThunk } from '@reduxjs/toolkit'
import { getUserAuthData } from '5_entities/User'
import { type ThunkConfig } from '1_app/provides/StoreProvider'
import { getArticleDetailsData } from '5_entities/Article'
import { getAddCommentFormText } from '4_features/AddCommentForm/model/selectors/addCommentFormSelectors'
import { fetchCommentsByArticleId } from '../../services/fetchCommentsByArticleId/fetchCommentsByArticleId'

export const addCommentForArticle = createAsyncThunk<Comment, string, ThunkConfig<string>>(
    'articleDetails/addCommentForArticle',
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

            void dispatch(fetchCommentsByArticleId(article.id))

            return response.data
        } catch (e) {
            return rejectWithValue('Неверно введен логин или пароль')
        }
    }
)
