import { type Decorator } from '@storybook/react'
import { type StateSchema, StoreProvider } from '1_app/provides/StoreProvider'
import { loginReducer } from '4_features/AuthByUsername/model/slice/loginSlice'
import { profileReducer } from '4_features/EditableProfileCard'

import { type ReducersList } from '6_shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { articleDetailsReducer } from '5_entities/Article/model/slices/articleDetailsSlice'
import { addCommentFormReducer } from '4_features/AddCommentForm/model/slices/addCommentFormSlice'
import { articleDetailsPageReducer } from '2_pages/ArticleDetailPage'

const defaultAsyncReducers: ReducersList = {
    loginForm: loginReducer,
    profile: profileReducer,
    articleDetails: articleDetailsReducer,
    addCommentForm: addCommentFormReducer,
    articleDetailsPage: articleDetailsPageReducer
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
