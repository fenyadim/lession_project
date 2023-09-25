import { getCounterValue } from './getCounterValue'
import { type DeepPartial } from 'redux'
import { type StateSchema } from 'app/provides/StoreProvider'

describe('getCounterValue.test', () => {
    test('should return value', () => {
        const state: DeepPartial<StateSchema> = {
            counter: { value: 10 }
        }
        expect(getCounterValue(state as StateSchema)).toEqual(10)
    })
})
