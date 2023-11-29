import { type StateSchema } from '@/1_app/provides/StoreProvider'
import { getArticleDetailsData, getArticleDetailsError, getArticleDetailsIsLoading } from './articleDetails'

describe('articleDetails.test', () => {
    test('should return data', () => {
        const data = {
            id: '1',
            title: 'subtitle'
        }
        const state = {
            articleDetails: {
                data
            }
        }
        expect(getArticleDetailsData(state as StateSchema)).toEqual(data)
    })

    test('should work with empty state', () => {
        const state = {}
        expect(getArticleDetailsData(state as StateSchema)).toEqual(undefined)
    })
    test('should return isLoading', () => {
        const state = {
            articleDetails: {
                isLoading: true
            }
        }
        expect(getArticleDetailsIsLoading(state as StateSchema)).toEqual(true)
    })

    test('should work with empty Loading', () => {
        const state = {}
        expect(getArticleDetailsIsLoading(state as StateSchema))
            .toEqual(undefined)
    })

    test('should return Error', () => {
        const state = {
            articleDetails: {
                error: 'Error'
            }
        }
        expect(getArticleDetailsError(state as StateSchema)).toEqual('Error')
    })

    test('should work with empty Error', () => {
        const state = {}
        expect(getArticleDetailsError(state as StateSchema)).toEqual(undefined)
    })
})
