import { profileActions, profileReducer } from './profileSlice'
import { type ProfileSchema, ValidateProfileError } from '../types/profile'
import { Currency } from '5_entities/Currency'
import { Country } from '5_entities/Country'
import { updateProfileData } from '../service/updateProfileData/updateProfileData'

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
describe('profileSlice.test', () => {
    test('test set readonly', () => {
        const state: DeepPartial<ProfileSchema> = {
            readonly: false
        }
        expect(profileReducer(
            state as ProfileSchema,
            profileActions.setReadonly(true)
        )).toEqual({ readonly: true })
    })

    test('test cancel edit', () => {
        const state: DeepPartial<ProfileSchema> = {
            data, form: { username: '' }
        }
        expect(profileReducer(
            state as ProfileSchema,
            profileActions.cancelEdit()
        )).toEqual({
            readonly: true,
            form: data,
            data,
            validateErrors: undefined
        })
    })

    test('test update profile', () => {
        const state: DeepPartial<ProfileSchema> = {
            form: data
        }
        expect(profileReducer(
            state as ProfileSchema,
            profileActions.updateProfile({
                username: 'Vova'
            })
        )).toEqual({
            form: {
                ...data,
                username: 'Vova'
            }
        })
    })

    test('test update profile service pending', () => {
        const state: DeepPartial<ProfileSchema> = {
            isLoading: false,
            validateErrors: [ValidateProfileError.SERVER_ERROR]
        }
        expect(profileReducer(
            state as ProfileSchema,
            updateProfileData.pending
        )).toEqual({
            isLoading: true,
            validateErrors: undefined
        })
    })

    test('test update profile service fulfilled', () => {
        const state: DeepPartial<ProfileSchema> = {
            isLoading: false,
            validateErrors: [ValidateProfileError.SERVER_ERROR]
        }
        expect(profileReducer(
            state as ProfileSchema,
            updateProfileData.fulfilled(data, '', undefined)
        )).toEqual({
            isLoading: false,
            validateErrors: undefined,
            readonly: true,
            form: data,
            data
        })
    })
})
