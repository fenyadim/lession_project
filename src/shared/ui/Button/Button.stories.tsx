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
        children: 'Text',
        theme: 'outline'
    }
}

export const OutlineSizeL: Story = {
    args: {
        children: 'Text',
        theme: 'outline',
        size: 'l'
    }
}

export const OutlineSizeXL: Story = {
    args: {
        children: 'Text',
        theme: 'outline',
        size: 'xl'
    }
}

export const OutlineDark: Story = {
    args: {
        children: 'Text',
        theme: 'outline'
    }
}
OutlineDark.decorators = [ThemeDecorator(Theme.DARK)]

export const Background: Story = {
    args: {
        children: 'Text',
        theme: 'background'
    }
}

export const BackgroundInverted: Story = {
    args: {
        children: 'Text',
        theme: 'backgroundInverted'
    }
}

export const Square_M: Story = {
    args: {
        children: '>',
        theme: 'backgroundInverted',
        square: true,
        size: 'm'
    }
}

export const Square_L: Story = {
    args: {
        children: '>',
        theme: 'backgroundInverted',
        square: true,
        size: 'l'
    }
}

export const Square_XL: Story = {
    args: {
        children: '>',
        theme: 'backgroundInverted',
        square: true,
        size: 'xl'
    }
}
