import { initArticlesPage } from './initArticlesPage'
import { TestAsyncThunk } from 'shared/lib/tests/testAsyncThunk/testAsyncThunk'

jest.mock('../fetchArticleList/fetchArticleList')

describe('initArticlesPage.test', () => {
    test('start init', async () => {
        const thunk = new TestAsyncThunk(initArticlesPage, {
            articlesPage: {
                page: 2,
                ids: [],
                entities: {},
                limit: 5,
                isLoading: false,
                hasMore: true,
                _inited: false
            }
        })

        // await thunk.callThunk({})

        expect(thunk.dispatch).toBeCalledTimes(4)
    })
    test('stay init', async () => {
        const thunk = new TestAsyncThunk(initArticlesPage, {
            articlesPage: {
                page: 2,
                ids: [],
                entities: {},
                limit: 5,
                isLoading: false,
                hasMore: true,
                _inited: true
            }
        })

        // await thunk.callThunk(undefined)

        expect(thunk.dispatch).toBeCalledTimes(2)
    })
})
