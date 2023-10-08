import { type Decorator } from '@storybook/react'
import { type StateSchema, StoreProvider } from 'app/provides/StoreProvider'
import { type DeepPartial, type ReducersMapObject } from '@reduxjs/toolkit'
import { loginReducer } from 'features/AuthByUsername/model/slice/loginSlice'
import { profileReducer } from 'entities/Profile'

const defaultAsyncReducers: DeepPartial<ReducersMapObject<StateSchema>> = {
    loginForm: loginReducer,
    profile: profileReducer
}
export const StoreDecorator = (
    state: DeepPartial<StateSchema>,
    asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>
    // eslint-disable-next-line react/display-name
): Decorator => (Story) => (
    <StoreProvider
        initialState={ state as StateSchema }
        asyncReducers={ { ...defaultAsyncReducers, ...asyncReducers } }
    >
        <Story/>
    </StoreProvider>
)
