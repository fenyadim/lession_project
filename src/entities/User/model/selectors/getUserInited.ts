import { type StateSchema } from 'app/provides/StoreProvider'

export const getUserInited = (state: StateSchema) => state.user._inited
