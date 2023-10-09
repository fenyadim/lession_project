import { type StateSchema } from 'app/provides/StoreProvider'

export const getProfileError = (state: StateSchema) => state.profile?.error
