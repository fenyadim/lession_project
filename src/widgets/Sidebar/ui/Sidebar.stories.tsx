import type { Meta, StoryObj } from '@storybook/react'

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator'
import { Theme } from 'app/provides/ThemeProvider'
import { Sidebar } from 'widgets/Sidebar'

const meta: Meta<typeof Sidebar> = {
    title: 'widgets/Sidebar',
    component: Sidebar
}

export default meta

type Story = StoryObj<typeof Sidebar>

export const Light: Story = {
    args: {}
}

export const Dark: Story = {
    args: {}
}
Dark.decorators = [ThemeDecorator(Theme.DARK)]
