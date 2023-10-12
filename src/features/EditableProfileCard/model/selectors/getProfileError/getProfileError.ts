import { type StateSchema } from 'app/provides/StoreProvider'

export const getProfileError = (state: StateSchema): string | undefined => state.profile?.error
