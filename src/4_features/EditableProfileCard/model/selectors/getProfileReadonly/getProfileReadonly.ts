import { type StateSchema } from '1_app/provides/StoreProvider'

export const getProfileReadonly = (state: StateSchema): boolean | undefined => state.profile?.readonly
