import type { Meta, StoryObj } from '@storybook/react'

import { Text } from './Text'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator'
import { Theme } from 'app/provides/ThemeProvider'

const meta: Meta<typeof Text> = {
    title: 'shared/Text',
    component: Text
}

export default meta

type Story = StoryObj<typeof Text>

export const Element: Story = {
    args: {
        title: 'Title Title Title Title',
        text: 'Description, Description,Description'
    }
}

export const Error: Story = {
    args: {
        title: 'Title Title Title Title',
        text: 'Description, Description,Description',
        theme: 'error'
    }
}

export const OnlyTitle: Story = {
    args: {
        title: 'Title Title Title Title'
    }
}

export const OnlyText: Story = {
    args: {
        text: 'Description, Description,Description'
    }
}

export const ElementDark: Story = {
    args: {
        title: 'Title Title Title Title',
        text: 'Description, Description,Description'
    }
}

ElementDark.decorators = [ThemeDecorator(Theme.DARK)]

export const OnlyTitleDark: Story = {
    args: {
        title: 'Title Title Title Title'
    }
}

OnlyTitleDark.decorators = [ThemeDecorator(Theme.DARK)]

export const OnlyTextDark: Story = {
    args: {
        text: 'Description, Description,Description'
    }
}

OnlyTextDark.decorators = [ThemeDecorator(Theme.DARK)]