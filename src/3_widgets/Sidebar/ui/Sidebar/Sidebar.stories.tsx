import type { Meta, StoryObj } from '@storybook/react'

import { ThemeDecorator } from '6_shared/config/storybook/ThemeDecorator'
import { Theme } from '1_app/provides/ThemeProvider'
import { Sidebar } from './Sidebar'
import { StoreDecorator } from '6_shared/config/storybook/StoreDecorator'

const meta: Meta<typeof Sidebar> = {
    title: '3_widgets/Sidebar',
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
