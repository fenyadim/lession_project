import { createSlice } from '@reduxjs/toolkit'
import { type UserSchema } from '../types/user'

const initialState: UserSchema = {}

export const userSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {

        },
        decrement: (state) => {

        }
    }
})

export const { actions: userActions } = userSlice
export const { reducer: userReducer } = userSlice
