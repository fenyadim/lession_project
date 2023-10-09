import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router'
import { I18nextProvider } from 'react-i18next'
import i18nForTest from 'shared/config/i18n/i18nForTest'
import { type ReactNode } from 'react'
import { type StateSchema, StoreProvider } from 'app/provides/StoreProvider'

export interface componentRenderOptions {
    route?: string
    initialState?: DeepPartial<StateSchema>
}

export const componentRender = (component: ReactNode,
    options: componentRenderOptions = {}) => {
    const { route = '/', initialState } = options

    return render(
        <MemoryRouter initialEntries={ [route] }>
            <StoreProvider initialState={ initialState as StateSchema }>
                <I18nextProvider i18n={ i18nForTest }>
                    { component }
                </I18nextProvider>
            </StoreProvider>
        </MemoryRouter>
    )
}
