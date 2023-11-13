import { type StateSchema } from '1_app/provides/StoreProvider'

export const getLoginPassword = (state: StateSchema) => state?.loginForm?.password ||
    ''
