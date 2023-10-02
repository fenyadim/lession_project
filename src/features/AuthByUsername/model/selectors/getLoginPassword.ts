import { type StateSchema } from 'app/provides/StoreProvider'

export const getLoginPassword = (state: StateSchema) => state?.loginForm?.password ||
    ''
