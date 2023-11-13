import { type StateSchema } from '1_app/provides/StoreProvider'

export const getLoginError = (state: StateSchema) => state?.loginForm?.error
