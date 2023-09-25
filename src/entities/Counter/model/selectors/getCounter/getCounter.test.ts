import { getCounter } from './getCounter'
import { type DeepPartial } from 'redux'
import { type StateSchema } from 'app/provides/StoreProvider'

describe('getCounter', () => {
    test('should return counter value', () => {
        const state: DeepPartial<StateSchema> = {
            counter: { value: 10 }
        }
        expect(getCounter(state as StateSchema)).toEqual({ value: 10 })
    })
})
