import { type StateSchema } from 'app/provides/StoreProvider'

export const getProfileReadonly = (state: StateSchema): boolean | undefined => state.profile?.readonly
