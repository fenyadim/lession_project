import { type StateSchema } from 'app/provides/StoreProvider'

export const getLoginIsLoading = (state: StateSchema) => state?.loginForm?.isLoading ||
    false
