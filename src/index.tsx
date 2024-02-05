import { createRoot } from 'react-dom/client'
import '@/1_app/styles/index.scss'
import { BrowserRouter } from 'react-router-dom'
import App from '@/1_app/App'
import { ErrorBoundary } from '@/1_app/provides/ErrorBoundary'
import { StoreProvider } from '@/1_app/provides/StoreProvider'
import { ThemeProvider } from '@/1_app/provides/ThemeProvider'
import '@/6_shared/config/i18n/i18n'

const container = document.getElementById('root')

if (!container) throw new Error('Контейнер root не найден')
const root = createRoot(container)

root.render(
    <BrowserRouter>
        <StoreProvider>
            <ErrorBoundary>
                <ThemeProvider>
                    <App />
                </ThemeProvider>
            </ErrorBoundary>
        </StoreProvider>
    </BrowserRouter>,
)
export { Theme } from '@/6_shared/const/theme'
