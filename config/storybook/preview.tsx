import { type Preview } from '@storybook/react'
import { StyleDecorator } from '../../src/shared/config/storybook/StyleDecorator'
import { ThemeDecorator } from '../../src/shared/config/storybook/ThemeDecorator'
import { RouterDecorator } from '../../src/shared/config/storybook/RouterDecorator'
import { Theme } from '../../src/app/provides/ThemeProvider'

const preview: Preview = {
    decorators: [
        StyleDecorator,
        ThemeDecorator(Theme.LIGHT),
        RouterDecorator
    ],
    parameters: {
        actions: { argTypesRegex: '^on[A-Z].*' },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/
            }
        }
    }
}

export default preview
