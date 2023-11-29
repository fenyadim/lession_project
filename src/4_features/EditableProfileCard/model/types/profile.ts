import { type Country } from '@/5_entities/Country'
import { type Currency } from '@/5_entities/Currency'

export enum ValidateProfileError {
    INCORRECT_USERDATA = 'INCORRECT_USERDATA',
    INCORRECT_CITY = 'INCORRECT_CITY',
    NO_DATA = 'NO_DATA',
    SERVER_ERROR = 'SERVER_ERROR',
}

export interface Profile {
    id?: string
    first?: string
    lastname?: string
    age?: number
    currency?: Currency
    country?: Country
    city?: string
    username?: string
    avatar?: string
}

export interface ProfileSchema {
    data?: Profile
    form?: Profile
    isLoading: boolean
    error?: string
    readonly: boolean
    validateErrors?: ValidateProfileError[]
}
