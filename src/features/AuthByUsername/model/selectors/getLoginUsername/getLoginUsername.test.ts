import { type DeepPartial } from 'redux'
import { type StateSchema } from 'app/provides/StoreProvider'
import { getLoginPassword } from '../getLoginPassword/getLoginPassword'

describe('getLoginError.test', () => {
    test('should return username', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                password: 'admin'
            }
        }
        expect(getLoginPassword(state as StateSchema)).toEqual('admin')
    })

    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {}
        expect(getLoginPassword(state as StateSchema)).toEqual('')
    })
})
