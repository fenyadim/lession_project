import { type StateSchema } from 'app/provides/StoreProvider'

export const getProfileReadonly = (state: StateSchema) => state.profile?.readonly
