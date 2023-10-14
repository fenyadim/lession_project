import type { Meta, StoryObj } from '@storybook/react'

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator'
import { Theme } from 'app/provides/ThemeProvider'
import { Sidebar } from 'widgets/Sidebar'
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator'

const meta: Meta<typeof Sidebar> = {
    title: 'widgets/Sidebar',
    component: Sidebar
}

export default meta

type Story = StoryObj<typeof Sidebar>

export const Light: Story = {
    args: {}
}

Light.decorators = [StoreDecorator({
    user: {
        authData: {}
    }
})
]

export const Dark: Story = {
    args: {}
}
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({
    user: {
        authData: {}
    }
})
]

export const NoAuth: Story = {
    args: {}
}

NoAuth.decorators = [StoreDecorator({
    user: {}
})
]
