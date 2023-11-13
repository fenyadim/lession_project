import type { Meta, StoryObj } from '@storybook/react'
// eslint-disable-next-line @conarti/feature-sliced/layers-slices
import { Theme } from '1_app/provides/ThemeProvider'
import { ThemeDecorator } from '../../config/storybook/ThemeDecorator'
import { Text } from './Text'

const meta: Meta<typeof Text> = {
    title: '6_shared/Text',
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

export const SizeS: Story = {
    args: {
        size: 's',
        title: 'Title Title Title Title',
        text: 'Description, Description,Description'
    }
}

export const SizeM: Story = {
    args: {
        size: 'm',
        title: 'Title Title Title Title',
        text: 'Description, Description,Description'
    }
}

export const SizeL: Story = {
    args: {
        size: 'l',
        title: 'Title Title Title Title',
        text: 'Description, Description,Description'
    }
}
