import { type StateSchema } from '1_app/provides/StoreProvider'

export const getProfileIsLoading = (state: StateSchema): boolean | undefined => state.profile?.isLoading
