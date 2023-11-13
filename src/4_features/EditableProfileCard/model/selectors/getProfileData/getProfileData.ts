import { type StateSchema } from '1_app/provides/StoreProvider'

export const getProfileData = (state: StateSchema) => state?.profile?.data
