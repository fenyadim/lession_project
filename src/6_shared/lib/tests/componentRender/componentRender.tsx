import { type ReducersMapObject } from '@reduxjs/toolkit'
import { render } from '@testing-library/react'
import { type ReactNode } from 'react'
import { I18nextProvider } from 'react-i18next'
import { MemoryRouter } from 'react-router'
import { type StateSchema, StoreProvider } from '@/1_app/provides/StoreProvider'
import i18nForTest from '../../../config/i18n/i18nForTest'

export interface componentRenderOptions {
    route?: string
    initialState?: DeepPartial<StateSchema>
    asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>
}

export const componentRender = (component: ReactNode,
    options: componentRenderOptions = {}) => {
    const { route = '/', initialState, asyncReducers } = options

    return render(
        <MemoryRouter initialEntries={ [route] }>
            <StoreProvider
                asyncReducers={ asyncReducers }
                initialState={ initialState as StateSchema }
            >
                <I18nextProvider i18n={ i18nForTest }>
                    { component }
                </I18nextProvider>
            </StoreProvider>
        </MemoryRouter>
    )
}
