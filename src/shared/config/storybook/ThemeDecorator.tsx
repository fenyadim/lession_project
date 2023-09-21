import { type Decorator } from '@storybook/react'
import { type Theme } from 'app/provides/ThemeProvider'

export const ThemeDecorator =
    (theme: Theme): Decorator =>
        (Story) =>
            (
                <div className={`app ${theme}`}>
                    <Story />
                </div>
            )
