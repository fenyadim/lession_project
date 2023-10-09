import { type StateSchema } from 'app/provides/StoreProvider'

export const getProfileIsLoading = (state: StateSchema) => state.profile?.isLoading
