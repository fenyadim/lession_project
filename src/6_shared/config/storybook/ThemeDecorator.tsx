import { type Decorator } from '@storybook/react'
import { type Theme, ThemeProvider } from '1_app/provides/ThemeProvider'

// eslint-disable-next-line react/display-name
export const ThemeDecorator = (theme: Theme): Decorator => (Story) => (
    <ThemeProvider initialTheme={ theme }>
        <div className={ `app ${theme}` }>
            <Story/>
        </div>
    </ThemeProvider>
)
