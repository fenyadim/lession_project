import { type StateSchema } from '1_app/provides/StoreProvider'
import { type Profile } from '../../types/profile'

export const getProfileForm = (state: StateSchema): Profile | undefined => state?.profile?.form
