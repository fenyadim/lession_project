import { type DeepPartial } from '@reduxjs/toolkit'
import { type StateSchema } from '1_app/provides/StoreProvider'
import { getArticleDetailsData, getArticleDetailsError, getArticleDetailsIsLoading } from './articleDetails'

describe('articleDetails.test', () => {
    test('should return data', () => {
        const data = {
            id: '1',
            title: 'subtitle'
        }
        const state: DeepPartial<StateSchema> = {
            articleDetails: {
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-expect-error
                data
            }
        }
        expect(getArticleDetailsData(state as StateSchema)).toEqual(data)
    })

    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {}
        expect(getArticleDetailsData(state as StateSchema)).toEqual(undefined)
    })
    test('should return isLoading', () => {
        const state: DeepPartial<StateSchema> = {
            articleDetails: {
                isLoading: true
            }
        }
        expect(getArticleDetailsIsLoading(state as StateSchema)).toEqual(true)
    })

    test('should work with empty Loading', () => {
        const state: DeepPartial<StateSchema> = {}
        expect(getArticleDetailsIsLoading(state as StateSchema))
            .toEqual(undefined)
    })

    test('should return Error', () => {
        const state: DeepPartial<StateSchema> = {
            articleDetails: {
                error: 'Error'
            }
        }
        expect(getArticleDetailsError(state as StateSchema)).toEqual('Error')
    })

    test('should work with empty Error', () => {
        const state: DeepPartial<StateSchema> = {}
        expect(getArticleDetailsError(state as StateSchema)).toEqual(undefined)
    })
})