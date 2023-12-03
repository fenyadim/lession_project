import { type Preview } from '@storybook/react'
import { Theme } from '@/1_app/provides/ThemeProvider'
import { RouterDecorator } from '@/6_shared/config/storybook/RouterDecorator'
import { StyleDecorator } from '@/6_shared/config/storybook/StyleDecorator'
import { SuspenseDecorator } from '@/6_shared/config/storybook/SuspenseDecorator'
import { ThemeDecorator } from '@/6_shared/config/storybook/ThemeDecorator'

const preview: Preview = {
    decorators: [
        ThemeDecorator(Theme.LIGHT),
        StyleDecorator,
        RouterDecorator,
        SuspenseDecorator
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
