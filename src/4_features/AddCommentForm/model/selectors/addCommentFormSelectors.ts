import { type StateSchema } from '1_app/provides/StoreProvider'

export const getAddCommentFormText = (state: StateSchema) => state.addCommentForm?.text ??
    ''
export const getAddCommentFormError = (state: StateSchema) => state.addCommentForm?.error
