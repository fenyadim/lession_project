import type { Meta, StoryObj } from '@storybook/react'
import { Theme } from '1_app/provides/ThemeProvider'
import { ThemeDecorator } from '../../config/storybook/ThemeDecorator'
import { Button } from './Button'

const meta: Meta<typeof Button> = {
    title: '6_shared/Button',
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

export const ClearInverted: Story = {
    args: {
        children: 'Clear',
        theme: 'clearInverted'
    }
}

export const ClearDark: Story = {
    args: {
        children: 'Clear',
        theme: 'clear'
    }
}
ClearDark.decorators = [ThemeDecorator(Theme.DARK)]

export const ClearInvertedDark: Story = {
    args: {
        children: 'Clear',
        theme: 'clearInverted'
    }
}
ClearInvertedDark.decorators = [ThemeDecorator(Theme.DARK)]

export const Outline: Story = {
    args: {
        children: 'Text',
        theme: 'outline'
    }
}

export const OutlineRed: Story = {
    args: {
        children: 'Text',
        theme: 'outline_red'
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

export const Disabled: Story = {
    args: {
        children: 'Text',
        theme: 'outline',
        disabled: true
    }
}

export const SquareM: Story = {
    args: {
        children: '>',
        theme: 'backgroundInverted',
        square: true,
        size: 'm'
    }
}

export const SquareL: Story = {
    args: {
        children: '>',
        theme: 'backgroundInverted',
        square: true,
        size: 'l'
    }
}

export const SquareXL: Story = {
    args: {
        children: '>',
        theme: 'backgroundInverted',
        square: true,
        size: 'xl'
    }
}
