import { type StateSchema } from '1_app/provides/StoreProvider'
import { Country } from '5_entities/Country'
import { Currency } from '5_entities/Currency'
import { getProfileForm } from './getProfileForm'

describe('getProfileForm.test', () => {
    test('should return form data', () => {
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
        const state: DeepPartial<StateSchema> = {
            profile: {
                form: data
            }
        }
        expect(getProfileForm(state as StateSchema)).toEqual(data)
    })

    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {}
        expect(getProfileForm(state as StateSchema)).toEqual(undefined)
    })
})
