import { getQueryParams } from './addQueryParams'

describe('addQueryParams.test', () => {
    test('test with one params', () => {
        const params = getQueryParams({
            test: 'value'
        })
        expect(params).toBe('?test=value')
    })
    test('test with many params', () => {
        const params = getQueryParams({
            test: 'value',
            second: 'test1'
        })
        expect(params).toBe('?test=value&second=test1')
    })
    test('test with undefined', () => {
        const params = getQueryParams({
            test: 'value',
            second: undefined
        })
        expect(params).toBe('?test=value')
    })
})
