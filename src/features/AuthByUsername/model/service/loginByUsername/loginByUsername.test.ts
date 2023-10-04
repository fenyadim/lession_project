import axios from 'axios'
import { loginByUsername } from './loginByUsername'
import { userActions } from 'entities/User'
import { TestAsyncThunk } from 'shared/lib/tests/testAsyncThunk/testAsyncThunk'

jest.mock('axios')

const mockAxios = jest.mocked(axios, true)

describe('loginByUsername.test', () => {
    test('success login', async () => {
        const userValue = { username: '123', id: '1' }
        mockAxios.post.mockReturnValue(
            Promise.resolve({ data: userValue }))

        const thunk = new TestAsyncThunk(loginByUsername)
        const result = await thunk.callThunk(
            { username: '123', password: '123' })

        expect(thunk.dispatch)
            .toHaveBeenCalledWith(userActions.setAuthData(userValue))
        expect(thunk.dispatch).toHaveBeenCalledTimes(3)
        expect(mockAxios.post).toHaveBeenCalled()
        expect(result.meta.requestStatus).toBe('fulfilled')
        expect(result.payload).toEqual(userValue)
    })

    test('error login', async () => {
        mockAxios.post.mockReturnValue(
            Promise.resolve({ status: 403 }))

        const thunk = new TestAsyncThunk(loginByUsername)
        const result = await thunk.callThunk(
            { username: '123', password: '123' })

        expect(thunk.dispatch).toHaveBeenCalledTimes(2)
        expect(mockAxios.post).toHaveBeenCalled()
        expect(result.meta.requestStatus).toBe('rejected')
        expect(result.payload).toEqual('Неверно введен логин или пароль')
    })
})
