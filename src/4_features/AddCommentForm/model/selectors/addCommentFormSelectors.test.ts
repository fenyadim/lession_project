import { type StateSchema } from '1_app/provides/StoreProvider'
import { getAddCommentFormError, getAddCommentFormText } from './addCommentFormSelectors'

describe('addCommentForm.test', () => {
    test('should return text', () => {
        const state: DeepPartial<StateSchema> = {
            addCommentForm: {
                text: '123'
            }
        }
        expect(getAddCommentFormText(state as StateSchema)).toEqual('123')
    })

    test('should return error', () => {
        const state: DeepPartial<StateSchema> = {
            addCommentForm: {
                error: 'error'
            }
        }
        expect(getAddCommentFormError(state as StateSchema)).toEqual('error')
    })
})
