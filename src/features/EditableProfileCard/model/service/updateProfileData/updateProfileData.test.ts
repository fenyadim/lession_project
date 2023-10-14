import { updateProfileData } from './updateProfileData'
import { TestAsyncThunk } from 'shared/lib/tests/testAsyncThunk/testAsyncThunk'
import { Currency } from 'entities/Currency'
import { Country } from 'entities/Country'
import { ValidateProfileError } from 'features/EditableProfileCard'

jest.mock('axios')

const data = {
    first: 'Тимур',
    lastname: 'Ульби',
    age: 22,
    currency: Currency.RUB,
    country: Country.Ukraine,
    city: 'Иркутск',
    username: 'admin',
    avatar: 'https://pic.rutubelist.ru/user/3b/27/3b2758ad5492a76b578f7ee072e4e894.jpg'
}

describe('updateProfileData.test', () => {
    test('success', async () => {
        const thunk = new TestAsyncThunk(updateProfileData, {
            profile: {
                form: data
            }
        })
        thunk.api.put.mockReturnValue(
            Promise.resolve({ data }))
        const result = await thunk.callThunk(undefined)

        expect(thunk.api.put).toHaveBeenCalled()
        expect(result.meta.requestStatus).toBe('fulfilled')
        expect(result.payload).toEqual(data)
    })

    test('server error', async () => {
        const thunk = new TestAsyncThunk(updateProfileData, {
            profile: {
                form: data
            }
        })
        thunk.api.put.mockReturnValue(
            Promise.resolve({ status: 403 }))

        const result = await thunk.callThunk(undefined)
        expect(result.meta.requestStatus).toBe('rejected')
        expect(result.payload).toEqual([ValidateProfileError.SERVER_ERROR])
    })

    test('validate error', async () => {
        const thunk = new TestAsyncThunk(updateProfileData, {
            profile: {
                form: { ...data, lastname: '' }
            }
        })

        const result = await thunk.callThunk(undefined)
        expect(result.meta.requestStatus).toBe('rejected')
        expect(result.payload)
            .toEqual([ValidateProfileError.INCORRECT_USERDATA])
    })
})
