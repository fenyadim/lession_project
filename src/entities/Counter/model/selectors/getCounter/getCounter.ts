import { type StateSchema } from 'app/provides/StoreProvider'
import { type CounterSchema } from '../../types/counterSchema'

export const getCounter = (state: StateSchema): CounterSchema => state.counter
