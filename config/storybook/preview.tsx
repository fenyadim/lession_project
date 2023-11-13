import { type Preview } from '@storybook/react'
import { StyleDecorator } from '6_shared/config/storybook/StyleDecorator'
import { ThemeDecorator } from '6_shared/config/storybook/ThemeDecorator'
import { RouterDecorator } from '6_shared/config/storybook/RouterDecorator'
import { Theme } from '1_app/provides/ThemeProvider'

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
