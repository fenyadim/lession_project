import { type StateSchema } from 'app/provides/StoreProvider'

export const getProfileValidateErrors = (state: StateSchema) => state.profile?.validateErrors
