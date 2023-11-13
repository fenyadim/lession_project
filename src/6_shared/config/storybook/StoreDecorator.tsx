import { type Decorator } from '@storybook/react'
import { type StateSchema, StoreProvider } from '1_app/provides/StoreProvider'
import { articleDetailsPageReducer } from '2_pages/ArticleDetailPage'
import { addCommentFormReducer } from '4_features/AddCommentForm'
import { loginReducer } from '4_features/AuthByUsername'
import { profileReducer } from '4_features/EditableProfileCard'
import { articleDetailsReducer } from '5_entities/Article'
import { type ReducersList } from '../../lib/components/DynamicModuleLoader/DynamicModuleLoader'

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
