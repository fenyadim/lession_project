import { type Decorator } from '@storybook/react'
import { type Theme } from 'app/provides/ThemeProvider'

// eslint-disable-next-line react/display-name
export const ThemeDecorator = (theme: Theme): Decorator => (Story) => (
    <div className={`app ${theme}`}>
        <Story/>
    </div>
)
