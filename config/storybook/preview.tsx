import { type Preview } from '@storybook/react'
import { RouterDecorator } from '@/6_shared/config/storybook/RouterDecorator'
import { StyleDecorator } from '@/6_shared/config/storybook/StyleDecorator'
import { SuspenseDecorator } from '@/6_shared/config/storybook/SuspenseDecorator'
import { ThemeDecorator } from '@/6_shared/config/storybook/ThemeDecorator'
import { Theme } from '@/6_shared/const/theme'

const preview: Preview = {
    decorators: [
        StyleDecorator,
        RouterDecorator,
        SuspenseDecorator,
        ThemeDecorator(Theme.LIGHT)
    ],
    parameters: {
        actions: { argTypesRegex: '^on[A-Z].*' },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/
            }
        },
        themes: {
            default: 'light',
            list: [
                { name: 'light', class: Theme.LIGHT, color: '#FAEBD7FF' },
                { name: 'dark', class: Theme.DARK, color: '#4169E1FF' }
            ]
        }
    }
}

export default preview
