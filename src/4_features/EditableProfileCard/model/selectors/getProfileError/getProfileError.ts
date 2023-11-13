import { type StateSchema } from '1_app/provides/StoreProvider'

export const getProfileError = (state: StateSchema): string | undefined => state.profile?.error
