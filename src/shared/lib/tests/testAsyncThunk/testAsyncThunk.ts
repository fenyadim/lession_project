import { type AsyncThunkAction } from '@reduxjs/toolkit'
import { type StateSchema, type ThunkConfig } from 'app/provides/StoreProvider'
import axios, { type AxiosStatic } from 'axios'

type ActionCreatorType<Return, Arg, RejectedValue> = (arg: Arg) => AsyncThunkAction<Return, Arg, ThunkConfig<RejectedValue>>

jest.mock('axios')

const mockAxios = jest.mocked(axios, true)

export class TestAsyncThunk<Return, Arg, RejectedValue> {
    dispatch: jest.MockedFn<any>
    getState: () => StateSchema
    actionCreator: ActionCreatorType<Return, Arg, RejectedValue>

    api: jest.MockedFunctionDeep<AxiosStatic>
    navigate: jest.MockedFn<any>

    constructor (
        actionCreator: ActionCreatorType<Return, Arg, RejectedValue>,
        state?: DeepPartial<StateSchema>
    ) {
        this.actionCreator = actionCreator
        this.dispatch = jest.fn()
        this.getState = jest.fn(() => state as StateSchema)

        this.api = mockAxios
        this.navigate = jest.fn()
    }

    async callThunk (arg: Arg) {
        const action = this.actionCreator(arg)
        return await action(this.dispatch, this.getState, {
            api: this.api,
            navigate: this.navigate
        })
    }
}
