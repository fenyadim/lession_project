import { createAsyncThunk } from '@reduxjs/toolkit'
import { type ThunkConfig } from '@/1_app/provides/StoreProvider'
import { type User, userActions } from '@/5_entities/User'
import { USER_LOCALSTORAGE_KEY } from '@/6_shared/const/localStorage'

interface LoginByUsernameProps {
    username: string
    password: string
}

export const loginByUsername = createAsyncThunk<User, LoginByUsernameProps, ThunkConfig<string>>(
    'common/loginByUsername',
    async (authData, thunkAPI) => {
        const { extra, rejectWithValue, dispatch } = thunkAPI

        try {
            const response = await extra.api.post<User>(
                '/login',
                authData
            )

            if (!response.data) {
                throw new Error()
            }

            localStorage.setItem(USER_LOCALSTORAGE_KEY,
                JSON.stringify(response.data))
            dispatch(userActions.setAuthData(response.data))

            return response.data
        } catch (e) {
            console.log(e)
            return rejectWithValue('Неверно введен логин или пароль')
        }
    }
)
