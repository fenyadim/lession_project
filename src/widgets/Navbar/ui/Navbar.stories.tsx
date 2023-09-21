import type { Meta, StoryObj } from '@storybook/react'

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator'
import { Theme } from 'app/provides/ThemeProvider'
import { Navbar } from 'widgets/Navbar'

const meta: Meta<typeof Navbar> = {
    title: 'widgets/Navbar',
    component: Navbar
}

export default meta

type Story = StoryObj<typeof Navbar>

export const Light: Story = {
    args: {}
}

export const Dark: Story = {
    args: {}
}
Dark.decorators = [ThemeDecorator(Theme.DARK)]
