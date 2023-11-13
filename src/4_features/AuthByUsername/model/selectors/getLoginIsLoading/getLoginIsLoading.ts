import { type StateSchema } from '1_app/provides/StoreProvider'

export const getLoginIsLoading = (state: StateSchema) => state?.loginForm?.isLoading ||
    false
