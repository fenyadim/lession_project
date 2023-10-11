import { type StateSchema } from 'app/provides/StoreProvider'

export const getProfileForm = (state: StateSchema) => state?.profile?.form
