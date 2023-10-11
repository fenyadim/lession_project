import { createAsyncThunk } from '@reduxjs/toolkit'
import { type ThunkConfig } from 'app/provides/StoreProvider'
import { type Profile } from '../../types/profile'
import { getProfileForm } from '../../selectors/getProfileForm/getProfileForm'

export const updateProfileData = createAsyncThunk<Profile, undefined, ThunkConfig<string>>(
    'profile/updateProfileData',
    async (_, thunkAPI) => {
        const { extra, rejectWithValue, getState } = thunkAPI

        const formData = getProfileForm(getState())

        try {
            const response = await extra.api.put<Profile>('/profile', formData)

            return response.data
        } catch (e) {
            console.log(e)
            return rejectWithValue('Что-то пошло не так!')
        }
    }
)
