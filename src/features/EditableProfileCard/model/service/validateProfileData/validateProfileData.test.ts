import { validateProfileData } from './validateProfileData'
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

describe('validateProfileData.test', () => {
    test('success', async () => {
        const result = validateProfileData(data)

        expect(result).toEqual([])
    })

    test('incorrect first and last name', async () => {
        const result = validateProfileData({ ...data, first: '', lastname: '' })
        expect(result).toEqual([ValidateProfileError.INCORRECT_USERDATA])
    })

    test('incorrect city', async () => {
        const result = validateProfileData({ ...data, city: undefined })
        expect(result).toEqual([ValidateProfileError.INCORRECT_CITY])
    })

    test('no data', async () => {
        const result = validateProfileData(undefined)
        expect(result).toEqual([ValidateProfileError.NO_DATA])
    })
})
