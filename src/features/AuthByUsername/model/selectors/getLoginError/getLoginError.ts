import { type StateSchema } from 'app/provides/StoreProvider'

export const getLoginError = (state: StateSchema) => state?.loginForm?.error
