import { type StateSchema } from 'app/provides/StoreProvider'

export const getLoginUsername = (state: StateSchema) => state?.loginForm?.username ||
    ''
