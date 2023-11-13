import { type CombinedState, configureStore, type ReducersMapObject } from '@reduxjs/toolkit'
import { type Reducer } from 'redux'
import { scrollSaveReducer } from '4_features/ScrollSave'
import { counterReducer } from '5_entities/Counter'
import { userReducer } from '5_entities/User'
import { $api } from '6_shared/api/api'
import { rtkApi } from '6_shared/api/rtkApi'
import { createReducerManager } from './reducerManager'
import { type StateSchema, type ThunkExtraArg } from './StateSchema'

export const createReduxStore = (
    initialState?: StateSchema,
    asyncReducers?: ReducersMapObject<StateSchema>
) => {
    const rootReducers: ReducersMapObject<StateSchema> = {
        ...asyncReducers,
        counter: counterReducer,
        user: userReducer,
        scrollSave: scrollSaveReducer,
        [rtkApi.reducerPath]: rtkApi.reducer
    }

    const reducerManager = createReducerManager(rootReducers)

    const extraArg: ThunkExtraArg = {
        api: $api
    }

    const store = configureStore({
        reducer: reducerManager.reduce as Reducer<CombinedState<StateSchema>>,
        devTools: __IS_DEV__,
        preloadedState: initialState,
        middleware: getDefaultMiddleware => getDefaultMiddleware({
            thunk: {
                extraArgument: extraArg
            }
        }).concat(
            rtkApi.middleware
        )
    })

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    store.reducerManager = reducerManager

    return store
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch']
