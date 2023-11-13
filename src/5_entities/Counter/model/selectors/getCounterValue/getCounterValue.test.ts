import { getCounterValue } from './getCounterValue'
import { type StateSchema } from '1_app/provides/StoreProvider'

describe('getCounterValue.test', () => {
    test('should return value', () => {
        const state: DeepPartial<StateSchema> = {
            counter: { value: 10 }
        }
        expect(getCounterValue(state as StateSchema)).toEqual(10)
    })
})
