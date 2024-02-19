import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { setFeaturesFlags } from '@/6_shared/lib/features'
import { USER_LOCALSTORAGE_KEY } from '@/6_shared/const/localStorage'
import { type User, type UserSchema } from '../types/user'

const initialState: UserSchema = {
    _inited: false,
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setAuthData: (state, action: PayloadAction<User>) => {
            state.authData = action.payload
            setFeaturesFlags(action.payload.features)
        },
        initAuthData: (state) => {
            const user = localStorage.getItem(USER_LOCALSTORAGE_KEY)
            if (user) {
                const json = JSON.parse(user) as User
                state.authData = json
                setFeaturesFlags(json.features)
            }
            state._inited = true
        },
        logout: (state) => {
            state.authData = undefined
            localStorage.removeItem(USER_LOCALSTORAGE_KEY)
        },
    },
})

export const { actions: userActions } = userSlice
export const { reducer: userReducer } = userSlice
