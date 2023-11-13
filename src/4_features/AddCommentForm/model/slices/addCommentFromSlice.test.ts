import { type AddCommentFormSchema } from '../types/addCommentForm'
import { addCommentFormActions, addCommentFormReducer } from './addCommentFormSlice'

describe('addCommentFromSlice.test', () => {
    test('test set text', () => {
        const state: DeepPartial<AddCommentFormSchema> = {
            text: '5000'
        }
        expect(addCommentFormReducer(
            state as AddCommentFormSchema,
            addCommentFormActions.setText('123')
        )).toEqual({ text: '123' })
    })
})
