import { type StateSchema } from 'app/provides/StoreProvider'
import { type Profile } from '../../types/profile'

export const getProfileForm = (state: StateSchema): Profile | undefined => state?.profile?.form
