import { type Profile, ValidateProfileError } from '../../types/profile'

export const validateProfileData = (profile?: Profile): ValidateProfileError[] => {
    if (!profile) {
        return [ValidateProfileError.NO_DATA]
    }

    const { first, lastname, city } = profile

    const errors: ValidateProfileError[] = []

    if (!first || !lastname) {
        errors.push(ValidateProfileError.INCORRECT_USERDATA)
    }

    if (!city) {
        errors.push(ValidateProfileError.INCORRECT_CITY)
    }

    return errors
}
