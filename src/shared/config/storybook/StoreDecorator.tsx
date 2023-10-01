import { type Decorator } from '@storybook/react'
import { type StateSchema, StoreProvider } from 'app/provides/StoreProvider'
import { type DeepPartial } from 'redux'

// eslint-disable-next-line react/display-name
export const StoreDecorator = (state: DeepPartial<StateSchema>): Decorator => (Story) => (
    <StoreProvider initialState={ state as StateSchema }>
        <Story/>
    </StoreProvider>
)
