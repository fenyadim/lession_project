import { TestAsyncThunk } from '@/6_shared/lib/tests/testAsyncThunk/testAsyncThunk'
import { fetchArticleList } from '../fetchArticleList/fetchArticleList'
import { fetchNextArticlePage } from './fetchNextArticlePage'

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
        expect(fetchArticleList).toHaveBeenCalled()
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
