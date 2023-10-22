import { type AxiosInstance } from 'axios'
import { type CombinedState, type EnhancedStore, type ReducersMapObject, type Reducer, type AnyAction } from '@reduxjs/toolkit'
import { type NavigateOptions } from 'react-router'
import { type Path } from 'history'
import { type CounterSchema } from 'entities/Counter'
import { type UserSchema } from 'entities/User'
import { type ArticleDetailsSchema } from 'entities/Article'
import { type LoginSchema } from 'features/AuthByUsername'
import { type ProfileSchema } from 'features/EditableProfileCard'
import { type ArticleDetailsCommentsSchema } from 'pages/ArticleDetailPage'

export interface StateSchema {
    counter: CounterSchema
    user: UserSchema

    // async
    loginForm?: LoginSchema
    profile?: ProfileSchema
    articleDetails?: ArticleDetailsSchema
    articleDetailsComments?: ArticleDetailsCommentsSchema
}

export type StateSchemaKey = keyof StateSchema

export interface ReducerManager {
    getReducerMap: () => ReducersMapObject<StateSchema>
    reduce: (state: StateSchema,
        action: AnyAction) => CombinedState<StateSchema>
    add: (key: StateSchemaKey, reducer: Reducer) => void
    remove: (key: StateSchemaKey) => void
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
    reducerManager: ReducerManager
}

export interface ThunkExtraArg {
    api: AxiosInstance
    navigate?: (to: string | Partial<Path>, options?: NavigateOptions) => void
}

export interface ThunkConfig<T> {
    rejectValue: T
    extra: ThunkExtraArg
    state: StateSchema
}
