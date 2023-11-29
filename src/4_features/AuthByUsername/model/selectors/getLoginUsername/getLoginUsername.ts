import { type StateSchema } from '@/1_app/provides/StoreProvider'

export const getLoginUsername = (state: StateSchema) => state?.loginForm?.username ||
    ''
