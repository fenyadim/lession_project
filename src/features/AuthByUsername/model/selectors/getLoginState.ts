import { type StateSchema } from 'app/provides/StoreProvider'

export const getLoginState = (state: StateSchema) => state?.loginForm
