import { type StateSchema } from '@/1_app/provides/StoreProvider'
import { getLoginPassword } from './getLoginPassword'

describe('getLoginError.test', () => {
    test('should return password', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                password: '123'
            }
        }
        expect(getLoginPassword(state as StateSchema)).toEqual('123')
    })

    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {}
        expect(getLoginPassword(state as StateSchema)).toEqual('')
    })
})
