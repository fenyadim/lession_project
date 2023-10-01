import { type StateSchema } from 'app/provides/StoreProvider'

export const getUserAuthData = (state: StateSchema) => state.user.authData
