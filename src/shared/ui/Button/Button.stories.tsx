import type { Meta, StoryObj } from '@storybook/react'

import { Button } from './Button'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator'
import { Theme } from 'app/provides/ThemeProvider'

const meta: Meta<typeof Button> = {
    title: 'shared/Button',
    component: Button
}

export default meta

type Story = StoryObj<typeof Button>

export const Primary: Story = {
    args: {
        children: 'Primary'
    }
}

export const Clear: Story = {
    args: {
        children: 'Clear',
        theme: 'clear'
    }
}

export const ClearDark: Story = {
    args: {
        children: 'Clear',
        theme: 'clear'
    }
}
ClearDark.decorators = [ThemeDecorator(Theme.DARK)]

export const Outline: Story = {
    args: {
        children: 'Outline',
        theme: 'outline'
    }
}

export const OutlineDark: Story = {
    args: {
        children: 'Outline',
        theme: 'outline'
    }
}
OutlineDark.decorators = [ThemeDecorator(Theme.DARK)]
