import { getCounter } from './getCounter'
import { type StateSchema } from '1_app/provides/StoreProvider'

describe('getCounter', () => {
    test('should return counter value', () => {
        const state: DeepPartial<StateSchema> = {
            counter: { value: 10 }
        }
        expect(getCounter(state as StateSchema)).toEqual({ value: 10 })
    })
})
