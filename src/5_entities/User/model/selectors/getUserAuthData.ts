import { type StateSchema } from '@/1_app/provides/StoreProvider'

export const getUserAuthData = (state: StateSchema) => state.user.authData
