import { type StateSchema } from 'app/provides/StoreProvider'

export const getProfileData = (state: StateSchema) => state?.profile?.data
