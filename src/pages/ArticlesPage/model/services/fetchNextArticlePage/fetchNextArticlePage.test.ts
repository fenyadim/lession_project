import { fetchNextArticlePage } from './fetchNextArticlePage'
import { TestAsyncThunk } from 'shared/lib/tests/testAsyncThunk/testAsyncThunk'
import { fetchArticleList } from '../fetchArticleList/fetchArticleList'

jest.mock('../fetchArticleList/fetchArticleList')

describe('fetchNextArticlePage.test', () => {
    test('success', async () => {
        const thunk = new TestAsyncThunk(fetchNextArticlePage, {
            articlesPage: {
                page: 2,
                ids: [],
                entities: {},
                limit: 5,
                isLoading: false,
                hasMore: true
            }
        })

        await thunk.callThunk(undefined)

        expect(thunk.dispatch).toBeCalledTimes(4)
        expect(fetchArticleList).toHaveBeenCalledWith({ page: 3 })
    })
    test('fetchArticleList not called', async () => {
        const thunk = new TestAsyncThunk(fetchNextArticlePage, {
            articlesPage: {
                page: 2,
                ids: [],
                entities: {},
                limit: 5,
                isLoading: false,
                hasMore: false
            }
        })

        await thunk.callThunk(undefined)

        expect(thunk.dispatch).toBeCalledTimes(2)
        expect(fetchArticleList).not.toHaveBeenCalled()
    })
    test('fetchArticleList not called (isLoading = true)', async () => {
        const thunk = new TestAsyncThunk(fetchNextArticlePage, {
            articlesPage: {
                page: 2,
                ids: [],
                entities: {},
                limit: 5,
                isLoading: true,
                hasMore: false
            }
        })

        await thunk.callThunk(undefined)

        expect(thunk.dispatch).toBeCalledTimes(2)
        expect(fetchArticleList).not.toHaveBeenCalled()
    })
})
