import { type StateSchema } from 'app/provides/StoreProvider'

export const getProfileIsLoading = (state: StateSchema): boolean | undefined => state.profile?.isLoading
