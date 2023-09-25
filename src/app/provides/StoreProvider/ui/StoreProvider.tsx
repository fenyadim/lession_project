import { type FC } from 'react'
import { Provider } from 'react-redux'
import { createReduxStore } from 'app/provides/StoreProvider/config/store'
import { type StateSchema } from 'app/provides/StoreProvider/config/StateSchema'

interface StoreProviderProps {
    initialState?: StateSchema
}

export const StoreProvider: FC<StoreProviderProps> = (props) => {
    const { children, initialState } = props

    const store = createReduxStore(initialState)

    return (
        <Provider store={ store }>
            { children }
        </Provider>
    )
}
