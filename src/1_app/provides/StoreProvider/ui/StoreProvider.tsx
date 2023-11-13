import { type ReducersMapObject } from '@reduxjs/toolkit'
import { type FC } from 'react'
import { Provider } from 'react-redux'
import { type StateSchema } from '../../../provides/StoreProvider/config/StateSchema'
import { createReduxStore } from '../../../provides/StoreProvider/config/store'

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
