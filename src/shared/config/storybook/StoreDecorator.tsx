import { type Decorator } from '@storybook/react'
import { type StateSchema, StoreProvider } from 'app/provides/StoreProvider'
import { loginReducer } from 'features/AuthByUsername/model/slice/loginSlice'
import { profileReducer } from 'features/EditableProfileCard'

import { type ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { articleDetailsReducer } from 'entities/Article/model/slices/articleDetailsSlice'

const defaultAsyncReducers: ReducersList = {
    loginForm: loginReducer,
    profile: profileReducer,
    articleDetails: articleDetailsReducer
}
export const StoreDecorator = (
    state: DeepPartial<StateSchema>,
    asyncReducers?: ReducersList
    // eslint-disable-next-line react/display-name
): Decorator => (Story) => (
    <StoreProvider
        initialState={ state as StateSchema }
        asyncReducers={ { ...defaultAsyncReducers, ...asyncReducers } }
    >
        <Story/>
    </StoreProvider>
)
