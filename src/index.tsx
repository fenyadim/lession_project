import '1_app/styles/index.scss'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from '1_app/provides/ThemeProvider'
import { ErrorBoundary } from '1_app/provides/ErrorBoundary'
import { StoreProvider } from '1_app/provides/StoreProvider'
import App from '1_app/App'
import '6_shared/config/i18n/i18n'

render(
    <BrowserRouter>
        <StoreProvider>
            <ErrorBoundary>
                <ThemeProvider>
                    <App/>
                </ThemeProvider>
            </ErrorBoundary>
        </StoreProvider>
    </BrowserRouter>,
    document.getElementById('root')
)
