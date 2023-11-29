import { type StateSchema } from '@/1_app/provides/StoreProvider'

export const getUserInited = (state: StateSchema) => state.user._inited
