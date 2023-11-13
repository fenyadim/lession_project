import { type AxiosInstance } from 'axios'
import { type AnyAction, type CombinedState, type EnhancedStore, type Reducer, type ReducersMapObject } from '@reduxjs/toolkit'
import { type CounterSchema } from '5_entities/Counter'
import { type UserSchema } from '5_entities/User'
import { type ArticleDetailsSchema } from '5_entities/Article'
import { type LoginSchema } from '4_features/AuthByUsername'
import { type ProfileSchema } from '4_features/EditableProfileCard'
import { type AddCommentFormSchema } from '4_features/AddCommentForm'
import { type ArticlesPageSchema } from '2_pages/ArticlesPage'
import { type ScrollSaveSchema } from '4_features/ScrollSave'
import { type ArticleDetailsPageSchema } from '2_pages/ArticleDetailPage'

export interface StateSchema {
    counter: CounterSchema
    user: UserSchema
    scrollSave: ScrollSaveSchema

    // async
    loginForm?: LoginSchema
    profile?: ProfileSchema
    articleDetails?: ArticleDetailsSchema
    addCommentForm?: AddCommentFormSchema
    articlesPage?: ArticlesPageSchema
    articleDetailsPage?: ArticleDetailsPageSchema
}

export type StateSchemaKey = keyof StateSchema

export type MountedReducers = OptionalRecord<StateSchemaKey, boolean>

export interface ReducerManager {
    getReducerMap: () => ReducersMapObject<StateSchema>
    reduce: (state: StateSchema,
        action: AnyAction) => CombinedState<StateSchema>
    add: (key: StateSchemaKey, reducer: Reducer) => void
    remove: (key: StateSchemaKey) => void
    getMountedReducers: () => MountedReducers
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
    reducerManager: ReducerManager
}

export interface ThunkExtraArg {
    api: AxiosInstance
}

export interface ThunkConfig<T> {
    rejectValue: T
    extra: ThunkExtraArg
    state: StateSchema
}
