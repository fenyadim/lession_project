import { type FC } from 'react'
import { Provider } from 'react-redux'
import { createReduxStore } from 'app/provides/StoreProvider/config/store'
import { type StateSchema } from 'app/provides/StoreProvider/config/StateSchema'
import { type ReducersMapObject } from '@reduxjs/toolkit'

interface StoreProviderProps {
    initialState?: DeepPartial<StateSchema>
    asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>
}

export const StoreProvider: FC<StoreProviderProps> = (props) => {
    const { children, initialState, asyncReducers } = props

    const store = createReduxStore(
        initialState as StateSchema,
        asyncReducers as ReducersMapObject<StateSchema>
    )

    return (
        <Provider store={ store }>
            { children }
        </Provider>
    )
}
