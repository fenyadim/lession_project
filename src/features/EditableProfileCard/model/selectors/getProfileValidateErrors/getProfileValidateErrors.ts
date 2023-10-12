import { type StateSchema } from 'app/provides/StoreProvider'
import { type ValidateProfileError } from '../../types/profile'

export const getProfileValidateErrors = (state: StateSchema): ValidateProfileError[] | undefined => state.profile?.validateErrors
